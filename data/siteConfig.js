module.exports = {
  siteTitle: 'Ajoupyterhub',
  siteDescription: 'A Blog Posts for the jupyterhub of Ajou University',
  authorName: 'Ajoupyterhub',
  twitterUsername: '',
  authorAvatar: 'intro_ajou_symbol.png', // file in content/images
  defaultLang: '', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `Ajoupyterhub team`,
  siteUrl: 'http://ajoupyterhub.ajousw.kr',
  disqusSiteUrl: '',
  utterSiteUrl: 'ajoupyterhub/blog',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'background.png', //'hd-wallpaper-g0ee48a622_1920.jpg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#c62828',
  display: 'standalone',
  icon: 'content/images/intro_ajou_symbol.png',
  postsPerPage: 6,
  disqusShortname: '', //'maxpou',
  headerTitle: 'Ajoupyterhub',
  headerLinksIcon: 'intro_ajou_symbol.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    } /*
    {
      label: 'Installation',
      url: '/how-to-install',
    },*/,
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
        /*
        {
          label: 'Installation',
          url: '/how-to-install',
        }, */
      ],
    },
    {
      sectionName: '둘러보기',
      links: [
        {
          label: 'Ajoupyterhub',
          url: 'https://jupyter.ajou.ac.kr',
          rel: 'external',
        },

        {
          label: 'Blog Theme 제공하신 분',
          url: 'https://www.maxpou.fr',
          rel: 'external',
        },
        /*
        {
          label: 'Blog Theme URL',
          url: 'https://www.gatsbyjs.com/plugins/gatsby-starter-morning-dew/',
          rel: 'external',
        },*/
      ],
    },
  ],
}
