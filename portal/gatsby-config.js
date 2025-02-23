const ignoreNonMdx = [
    "**/.*", // filer som starter med .
    "**/*.png",
    "**/*.md",
    "**/*.scss",
    "**/*.js",
    "**/*.ts",
    "**/*.tsx",
    "**/*.html",
    "**/*.json",
    "**/node_modules/**",
];

module.exports = {
    pathPrefix: process.env.PREVIEW_PATH ? `/${process.env.PREVIEW_PATH}` : "/",
    siteMetadata: {
        title: `Jøkul Designsystem`,
        description: `Jøkul er designsystemet til Fremtind`,
        author: `Fremtind`,
        siteUrl: "https://jokul.fremtind.no",
    },
    flags: {
        FAST_DEV: true,
        PARALLEL_SOURCING: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        { resolve: "gatsby-source-filesystem", options: { path: "./static/assets" } },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                // Det ligger bilder her av historiske årsaker
                path: "./src/components/Documentation/Picture/Assets",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "components",
                path: `${__dirname}/../packages`,
                ignore: ignoreNonMdx,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "docs",
                path: `${__dirname}/src/texts`,
                ignore: ignoreNonMdx,
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "static/assets/icon.png",
            },
        },
        {
            resolve: "gatsby-plugin-feed",
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                            siteUrl
                        }
                    }
                }
                `,
                feeds: [
                    {
                        title: "Jøkul Designsystem",
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.nodes.map((node) => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.publishDate,
                                    url: site.siteMetadata.siteUrl + node.fields.path,
                                    guid: site.siteMetadata.siteUrl + node.fields.path,
                                    custom_elements: [{ "content:encoded": node.html }],
                                });
                            });
                        },
                        query: `
                        {
                            allMdx(
                                sort: { fields: [frontmatter___publishDate], order: DESC },
                                filter: { fileAbsolutePath: {regex: "/\/portal\/src\/texts\/blog\/.*\.mdx$/"} },
                            ) {
                                nodes {
                                    excerpt(pruneLength: 280)
                                    html
                                    fields {
                                        path
                                    }
                                    frontmatter {
                                        title
                                        publishDate
                                    }
                                }
                            }
                        }
                        `,
                        output: "/blog/rss.xml",
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/components/Layout/Layout.tsx"),
            },
        },
    ],
};
