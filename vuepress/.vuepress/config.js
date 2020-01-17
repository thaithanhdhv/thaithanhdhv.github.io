module.exports = {
  dest: 'docs',
  title: 'Junokyo',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/blogs/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],

    footer: {
      contact: [
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'Made by me with <3',
          link: '',
        },
      ],
    },

    directories:[
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      },
    ],
    globalPagination: {
      lengthPerPage: 5,
    },
    // comment: {
    //   service: 'disqus',
    // },
    paginationComponent: 'SimplePagination',
    smoothScroll:true
  },
}
