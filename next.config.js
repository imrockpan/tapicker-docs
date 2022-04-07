const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/introduction",
        statusCode: 301,
      },
      {
        source: "/docs/getting-started",
        destination: "/docs/getting-started/installation-and-registration",
        statusCode: 301,
      },
      {
        source: "/docs/interactive-interface",
        destination: "/docs/interactive-interface/infrastructure",
        statusCode: 301,
      },
      {
        source: "/docs/recipe-development",
        destination: "/docs/recipe-development/main-flows",
        statusCode: 301,
      },
    ];
  },
});
