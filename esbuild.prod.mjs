// @ts-check
import browserslist from "browserslist";
import esbuild from "esbuild";
import { esbuildPluginBrowserslist } from "esbuild-plugin-browserslist";
import path from "path";
import browserListConfig from "./packages/browserslist-config-jkl/index.js";

/**
 *
 * @param {string} outbase
 * @param {"esm" | "cjs"} format
 * @returns
 */
const createConfig = (outbase, format) => {
    return [
        {
            bundle: false,
            minify: false,
            outdir: path.join(outbase, format),
            sourcemap: true,
            format,
            plugins: [
                esbuildPluginBrowserslist(browserslist(browserListConfig), {
                    printUnknownTargets: false,
                }),
            ],
        },
    ];
};

/**
 * @param {{ entryPoints: string[], outdir: string } | Array<{ entryPoints: string[], outdir: string }>} options - Send entrypoints til esbuild
 * @example
 *  await build({
 *    entryPoints: ["src/index.ts"],
 *    outdir: "dist",
 *  });
 */
export async function build(options) {
    const opts = Array.isArray(options) ? options : [options];
    try {
        await Promise.all(
            opts.flatMap((o) => [
                createConfig(o.outdir, "esm").flatMap((esm) =>
                    esbuild.build({
                        ...o,
                        ...esm,
                    }),
                ),
                createConfig(o.outdir, "cjs").flatMap((cjs) =>
                    esbuild.build({
                        ...o,
                        ...cjs,
                    }),
                ),
            ]),
        );
    } catch (e) {
        process.exit(1);
    }
}
