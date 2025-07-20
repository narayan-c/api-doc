import {themes as prismThemes, themes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PuzzleMe API',
  tagline: 'Programmatic access to puzzles and analytics',
  favicon: 'img/puzzleme-logo.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://amuselabs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/puzzleme-logo.svg',
    navbar: {
      title: 'PuzzleMe API',
      logo: {
        alt: 'PuzzleMe API Logo',
        src: 'img/puzzleme-logo.svg',
      },
      items: [
       /*  {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'API Documentation',
        }, */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'PuzzleMe Home',
              href: 'https://puzzleme.amuselabs.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amuse Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "pm-api", // Unique ID for the plugin
        docsPluginId: "classic", // Refers to the preset-classic Docusaurus setup
        config: {
          api: { // Renamed from 'petstore' for clarity
            specPath: "./combined-openapi.yml", // Point to local file
            outputDir: "docs", // Where the generated API docs will be stored
            sidebarOptions: {
              groupPathsBy: "tag", // Group endpoints by tags in the sidebar
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // Add the OpenAPI theme for viewing the API docs
};


export default config;
