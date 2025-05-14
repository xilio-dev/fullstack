import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'xilio-🐮',
  tagline: '当你排除一切不可能之后，剩下的，无论你多么的不相信，那就是真相！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doc.xilio.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xilio', // Usually your GitHub org/user name.
  projectName: 'xilio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['en','zh'],
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
            'https://github.com/xilio1/xilio-doc/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: '',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'xilio',
      logo: {
        alt: 'xilio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'javaSidebar',
          position: 'left',
          label: 'Java',
        },
        {
          type: 'docSidebar',
          sidebarId: 'queueSidebar',
          position: 'left',
          label: '消息队列',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mysqlSidebar',
          position: 'left',
          label: 'MySQL',
        },
        {
          type: 'docSidebar',
          sidebarId: 'redisSidebar',
          position: 'left',
          label: 'Redis',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sceneSidebar',
          position: 'left',
          label: '场景库',
        },
        {
          type: 'docSidebar',
          sidebarId: 'webServerSidebar',
          position: 'left',
          label: 'Web服务器',
        },
        {
          type: 'docSidebar',
          sidebarId: 'testSidebar',
          position: 'left',
          label: '测试',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/xilio1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '介绍',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '官网',
              href: 'https://www.xilio.cn',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/xilio1',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.com/xilio',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} xilio`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
