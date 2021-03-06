const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tributech DataSpace Kit Documentation',
  tagline: 'Data exchange reinvented – Secure. Traceable. Trusted.',
  url: 'https://docs.tributech.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'tributech-solutions',
  projectName: 'tributech-dsk-docs',
  themeConfig: {
    navbar: {
      title: 'Tributech DataSpace Kit Documentation',
      logo: {
        alt: 'Tributech Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: '/docs/introduction/overview',
          position: 'left',
          label: 'Introduction',
        },
        {
          href: '/docs/quickstart/overview',
          position: 'left',
          label: 'Quickstart',
        },
        {
          href: '/docs/setup/overview',
          position: 'left',
          label: 'Setup',
        },
        {
          href: '/docs/integration/overview',
          position: 'left',
          label: 'Integration',
        },
        {
          href: 'https://github.com/tributech-solutions',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Azure Marketplace',
          items: [
            {
              label: 'DataSpace Agent',
              href: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/tributechsolutionsgmbh1582568815297.57601ccd-62c3-4842-9f73-3dadd3de5b74?tab=Overview',
            },
            {
              label: 'DataSpace Node',
              href: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/tributechsolutionsgmbh1582568815297.8aa9010b-3dd5-43e0-a4b6-53e2ea552e4a?tab=Overview',
            },
            {
              label: 'DataSpace Kit',
              href: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/tributech.tributech_dataspace_kit?tab=Overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/tributech.io/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/tributechsolutions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://www.tributech.io/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tributech-solutions',
            },
          ],
        },
      ],
      copyright: `Copyright © 2018 - ${new Date().getFullYear()} Tributech Solutions GmbH`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    image: 'img/favicon.png',
    algolia: {
      apiKey: '038c83f2ea7d91ea50d9e914396ec1b5',
      indexName: 'tributech',
      contextualSearch: false, // false for now as we dont have versioning yet
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tributech-solutions/tributech-dsk-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
