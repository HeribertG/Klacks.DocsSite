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
    locales: [
      'de', 'en', 'fr', 'it',
      'ar', 'cs', 'da', 'el', 'es', 'fi', 'he', 'id', 'ja', 'ko', 'ms',
      'nb', 'nl', 'pl', 'pt', 'ro', 'sv', 'th', 'vi', 'zh-Hans', 'zh-Hant',
    ],
    localeConfigs: {
      de: { label: 'Deutsch' },
      en: { label: 'English' },
      fr: { label: 'Français' },
      it: { label: 'Italiano' },
      ar: { label: 'العربية', direction: 'rtl' },
      cs: { label: 'Čeština' },
      da: { label: 'Dansk' },
      el: { label: 'Ελληνικά' },
      es: { label: 'Español' },
      fi: { label: 'Suomi' },
      he: { label: 'עברית', direction: 'rtl' },
      id: { label: 'Bahasa Indonesia' },
      ja: { label: '日本語' },
      ko: { label: '한국어' },
      ms: { label: 'Bahasa Melayu' },
      nb: { label: 'Norsk Bokmål' },
      nl: { label: 'Nederlands' },
      pl: { label: 'Polski' },
      pt: { label: 'Português' },
      ro: { label: 'Română' },
      sv: { label: 'Svenska' },
      th: { label: 'ไทย' },
      vi: { label: 'Tiếng Việt' },
      'zh-Hans': { label: '中文（简体）' },
      'zh-Hant': { label: '中文（繁體）' },
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
