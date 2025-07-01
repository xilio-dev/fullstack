import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: '程序员xilio',
    tagline: '后端 架构 云原生',
    favicon: 'img/favicon.ico',

    // 在此处设置您网站的生产url
    url: 'https://xilio-doc.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/xilio-doc/',
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'xilio-dev', // Usually your GitHub org/user name.
    projectName: 'xilio-doc', // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh',
        locales: ['en', 'zh'],
    },
    scripts: [
        {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?',
            async: true,
            'data-ad-client': 'ca-pub-5856655690528931',
        },
    ],
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/xilio-dev/xilio-doc/tree/main',
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
        //设置内容标题级别
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5,
        },
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: '程序员',
            logo: {
                alt: 'xilio Logo',
                src: 'img/logo4.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'baseSidebar',
                    position: 'left',
                    label: '青铜段位',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'middleSidebar',
                    position: 'left',
                    label: '黄金段位',
                },
                {to: '/blog', label: '博客', position: 'right'},
                {
                    href: 'https://github.com/xilio-dev',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    label: 'Gitee',
                    href: 'https://gitee.com/xilio',
                    position: 'right'
                },
            ],
        },
        footer: {
            style: 'light',
            copyright: `Copyright © ${new Date().getFullYear()} xilio`,
        },
        prism: {
            //设置高亮语言
            additionalLanguages: ['powershell',"java","protobuf","python"],
            theme: prismThemes.oneDark,//白天主题
            darkTheme: prismThemes.oneDark,//黑夜主题
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
