const { description } = require("../../package");

module.exports = {
    title: "Nix² Documentation",
    description: description,
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],
    themeConfig: {
        logo: "/logo.png",
        repo: "nix2io/docs",
        editLinks: true,
        docsDir: "docs",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: true,
        nav: [
            {
                text: "Overview",
                link: "/overview/",
            },
            {
                text: "Services",
                ariaLabel: "Services Menu",
                items: [
                    {
                        text: "Matrix",
                        link: "/services/matrix/",
                    },
                ],
            },
        ],
        sidebar: "auto",
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
