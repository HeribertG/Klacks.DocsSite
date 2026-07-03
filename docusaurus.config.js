// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Klacks Docs',
  tagline: 'Personaleinsatzplanung, die Ihnen gehört',
  favicon: 'img/favicon.ico',

  url: 'https://klacks-software.ch',
  baseUrl: '/docs/',

  organizationName: 'HeribertG',
  projectName: 'Klacks.DocsSite',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'zh-Hans'],
    localeConfigs: {
      de: { label: 'Deutsch' },
      en: { label: 'English' },
      'zh-Hans': { label: '中文' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Klacks',
        logo: {
          alt: 'Klacks Logo',
          src: 'img/klacks-logo.svg',
        },
        items: [
          { href: 'https://klacks-software.ch', label: 'Website', position: 'right' },
          { href: 'https://klacks-software.ch:7643', label: 'Playground', position: 'right' },
          { href: 'https://discord.gg/YRP8p2abVC', label: 'Discord', position: 'right' },
          { href: 'https://github.com/HeribertG/Klacks.Api', label: 'GitHub', position: 'right' },
          { type: 'localeDropdown', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} Klacks · Open Source (MIT)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
