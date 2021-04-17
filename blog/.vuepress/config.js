module.exports = {
    title: '挖煤工', // Title for the site. This will be displayed in the navbar.
    theme: '@vuepress/theme-blog',
    base:"/blog/",
    themeConfig: {
      smoothScroll: true,
      footer: {
        contact: [
          {
            type: 'github',
            link: 'https://github.com/tao1874',
          },
          {
            type: 'twitter',
            link: 'https://twitter.com/SampanPeng',
          },
        ],
      }
    },
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#d05dd2' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/apple-icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
      [
        '@vuepress/pwa',{
          serviceWorker: true,
          updatePopup: true
        }
      ],
      ['@vuepress/medium-zoom']
    ],
    markdown:{
      toc:{
        includeLevel: [2,3,4]
      }
    }
  }