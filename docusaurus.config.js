// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Driven Extensible Headless CMS',
  tagline: 'The most powerful Headless CMS for your Content with Team Collaborations, Revision, CDN & Much more ..',
  url: 'https://apito.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apito-io', // Usually your GitHub org/user name.
  projectName: 'website-v2', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-149868545-2',
          anonymizeIP: false,
        },
        gtag: {
          trackingID: 'G-52W9MN75ZP',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'new_sdks_coming_soon',
        content: 'Coming Soon: Self Host version of Apito on Kubernetes & AWS Cloud',
        backgroundColor: '#2160FD',
        textColor: '#fff',
        //isCloseable: true,
      },
      docs : {
        sidebar : {
          hideable: true,
        }
      },
      navbar: {
        title: 'apito.io',
        logo: {
          alt: 'Apito Logo',
          src: 'img/logo.svg',
          width: 50,
          height: 50
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/docs/build-api-quick-start-guide',
            label: 'Documentation',
            position: 'left',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Products',
            position: 'right',
            items: [
              {
                to: '/powerful-and-extensible-headless-cms',
                label: 'Headless CMS',
              },
              {
                to: '/aws-based-headless-cms',
                label: 'AWS Headless CMS',
              },
              {
                to: '/using-apito-as-a-backend-graphql-and-rest-api',
                label: 'Backend For Apps',
              },
              {
                to: '/self-host-apito-on-aws-cloud-or-kubernetes-docker',
                label: 'Enterprise Cloud',
              },
              {
                to: '/open-source-headless-cms',
                label: 'Open Source (BETA)',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Customers',
            position: 'right',
            items: [
              {
                to: '/using-apito-as-a-backend-graphql-and-rest-api',
                label: 'App Developers',
              },
              {
                to: '/api-sandbox-for-startups',
                label: 'Founder & Startups',
              },
              {
                to: '/api-for-digital-business-owners',
                label: 'Digital Business Owners',
              },
            ],
          },
          {
            to: '/pricing',
            label: 'Pricing',
            position: 'right',
          },
          {
            to: '/faq',
            label: 'FAQ',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                to: '/',
                label: 'Home',
                position: 'right',
              },
              {
                to: '/self-host-apito-on-aws-cloud-or-kubernetes-docker',
                label: 'Self Host',
              },
              {
                to: '/pricing',
                label: 'Pricing',
              },
              {
                to: 'blog',
                label: 'Blog',
              },
              {
                to: '/faq',
                label: 'FAQ',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/apito',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/4EmZYYQATb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/apito_io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                to: '/docs/build-api-quick-start-guide',
                label: 'Documentation',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/apito.io',
              },
              {
                label: 'Privacy Policy',
                href: '/privacy-policy',
              },
              {
                label: 'User Agreement',
                to: '/user-agreement',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Apito LLC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 40,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: true,
      },
    ],
  ],

};

module.exports = config;
