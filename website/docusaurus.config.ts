import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'docs',
  tagline: 'osrs-bots/osrs-python-bot',
  favicon: 'img/test-tube.png',

  // Set the production url of your site here
  url: 'https://osrs-bots.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'osrs-bots', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/osrs-bots/docs/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
      }
    ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    image: 'img/osrs-bots-logo.jpg',
    navbar: {
      title: 'osrs-bots',
      hideOnScroll: true,
      logo: {
        alt: 'Test Tube Emoji',
        src: 'img/osrs-bots-logo.jpg',
        className: 'favicon-logo'
      },
      items: [
      ],
    },
    footer: {
      copyright: `<html>
        <div class='textWithTrailingIcon'>
          <p>docs built with <a href='https://docusaurus.io/'>docusaurus</a></p>
        </div>
      </html>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash', 
        'typescript', 
        'javascript', 
        'json', 
        'sql',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
