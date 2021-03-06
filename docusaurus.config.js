const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Circlepod Docs",
  tagline: "Next generation media protocol #solana, #nft, #metaverse ecosystem.",
  url: "https://docs.circlepod.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "xiaorangetech", // Usually your GitHub org/user name.
  projectName: "circlepod-doc", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Circlepod",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://klearthink.atlassian.net/servicedesk/customer/portals",
          label: "Request ticket",
          position: "right",
        },
        {
          href: "https://staging-launch.circlepod.app/",
          label: "Devnet App",
          position: "right",
        },
        {
          href: "https://www.circlepod.app",
          label: "Home",
          position: "right",
        },
        {
          href: "https://drive.google.com/file/d/12-5mo6BeDPyqkXl31AhIqdUY4mpwdAZb/view",
          label: "Whitepaper",
          position: "right",
        },
        {
          href: "https://github.com/Circelpod",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/circlepod",
            },
            {
              label: "Discord",
              href: "https://discord.gg/D2pNA2e6Dw",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/CirclepodP",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/circlepodp/",
            },
            {
              label: "More",
              href: "https://linktr.ee/CirclePod",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Circelpod",
            },
          ],
        },
      ],
      copyright: `Circlepod Protocol ?? ${new Date().getFullYear()} Created by Xiaorangetech`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    gtag: {
      trackingID: "G-YLB249CF5N",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-tw", "zh-cn", "id", "ja", "ko", "hi"],
  },
};
