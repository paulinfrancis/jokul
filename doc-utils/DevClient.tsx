import React from "react";
import { hydrateRoot } from "react-dom/client";
import { initTabListener } from "../packages/core";
import "../packages/core/core.scss";
import "../packages/webfonts/documentation/internal.scss";
import "../packages/radio-button/radio-button.scss";
import "../packages/checkbox/checkbox.scss";
import "../packages/expand-button/expand-button.scss";
import "../packages/icons/animated-icons.scss";
import "../packages/select/select.scss";

export type HydrateClientOptions = {
    rootId: string;
};

const defaults: HydrateClientOptions = {
    rootId: "app",
};

export function hydrateClient(rootComponent: React.ReactElement, options = defaults) {
    const opts = { ...defaults, ...options };

    initTabListener();

    const root = document.getElementById(opts.rootId);

    if (root) {
        hydrateRoot(root, rootComponent);
    } else {
        throw new Error(`No element found with ID ${opts.rootId} – hydration failed`);
    }
}
