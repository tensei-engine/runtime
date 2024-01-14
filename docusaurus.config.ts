import { themes as prismThemes } from "prism-react-renderer";
import type { Config, PluginConfig } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Tensei Engine - Runtime",
  tagline: "The beating heart of Tensei Engine",
  favicon: "img/favicon.ico",

  url: "https://tensei-engine.github.io",
  baseUrl: "/runtime",
  organizationName: "tensei-engine",
  projectName: "runtime",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          includeCurrentVersion: false,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Tensei Engine - Runtime",
      logo: {
        alt: "Tensei Engine - Runtime Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          position: "right",
          href: "https://github.com/tensei-engine/runtime",
          className: "header__github",
          "aria-label": "GitHub",
        },
        {
          position: "right",
          to: "https://tensei-engine.github.io",
          className: "header__home",
          target: "_self",
          "aria-label": "Home",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Quick Start",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/tensei-engine/runtime/discussions",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/tensei-engine/runtime",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tensei Engine, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: (process.env.TYPEDOC_TSCONFIG
    ? [
        [
          "docusaurus-plugin-typedoc",
          {
            entryPoints: process.env.TYPEDOC_ENTRY_POINT
              ? [process.env.TYPEDOC_ENTRY_POINT]
              : [],
            tsconfig: process.env.TYPEDOC_TSCONFIG,
            sidebar: {
              categoryLabel: "API Reference",
            },
          },
        ],
      ]
    : []) satisfies PluginConfig[],
};

export default config;
