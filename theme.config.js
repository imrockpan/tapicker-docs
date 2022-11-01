import { useRouter } from "next/router";

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "zh-CN": "有疑问？给我们反馈 →",
};

export default {
  projectLink: "https://github.com/ibyetool/tapicker-docs",
  docsRepositoryBase:
    "https://github.com/ibyetool/tapicker-docs/blob/main/pages",
  titleSuffix: " | Tapicker",
  search: true,
  floatTOC: true,
  unstable_flexsearch: true,
  feedbackLabels: "feedback",
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  logo: () => {
    return (
      <>
        <img
          className="hidden logo-white"
          src="/images/logo-white.svg"
          width="156"
          height="32"
          alt="logo"
        />
        <img
          className="hidden logo-primary"
          src="/images/logo-primary.svg"
          width="156"
          height="32"
          alt="logo"
        />
      </>
    );
  },
  head: ({ title, meta }) => {
    const ogImage = meta.image || "/images/cover.png";

    return (
      <>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png"
        />
        <link rel="manifest" href="/webmanifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "A powerful and no-coding web data collector that supports data extraction from any page and exporting data as Excel or JSON files."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "A powerful and no-coding web data collector that supports data extraction from any page and exporting data as Excel or JSON files."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tapicker" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title
              ? title + "| Tapicker"
              : "Tapicker - Powerful web data scraper"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="Tapicker" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        {process.env.NODE_ENV === "production" ? (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-RXVQGMXRNH"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-RXVQGMXRNH', {'debug_mode': ${
                  process.env.NODE_ENV === "development"
                }});`,
              }}
            ></script>
          </>
        ) : null}
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "zh-CN":
        return "在 GitHub 上编辑本页 →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: `${new Date().getFullYear()} © Tapicker.`,
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "简体中文" },
  ],
};
