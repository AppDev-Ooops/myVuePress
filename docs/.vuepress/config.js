module.exports = {
  title: 'My VuePress',

  head: [
    ['link', { rel: 'icon', href: 'https://vuepress.vuejs.org/hero.png' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,700,900' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  host: '0.0.0.0',

  port: '8080',

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    ['@vuepress/medium-zoom', { selector: 'img.page-image' } ],
    ['vuepress-plugin-code-copy', true] 
  ],

  themeConfig: {
    logo: 'https://vuepress.vuejs.org/hero.png',
    searchMaxSuggestions: 20,
    sidebarDepth: 3,
    displayAllHeaders: true,
    nav: [
      {
        text: '關於 VuePress',
        link: '/about/markdown'
      },
      {
        text: '這裡可以放連結',
        link: 'https://vuepress.vuejs.org/'
      },
      {
        text: '也可以寄 Email',
        link: 'mailto:test@gmail.com'
      }
    ],
    sidebar: {
      '/about/': [
        {
          title: '關於 VuePress',
          collapsable: false,
          children: ['markdown', 'vue-components']
        }
      ]
    }
  }
}
