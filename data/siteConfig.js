module.exports = {
  siteTitle: 'maxpou.fr',
  siteDescription: "👋 Hey I'm Max",
  authorName: 'Maxence Poutord',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: "👋 Hey I'm Max! I hope you liked this. 🐐",
  siteUrl: 'https://www.maxpou.fr/',
  pathPrefix: '/',
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: '🏡',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Speaking',
      url: '/speaking',
    },
  ],
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/',
      },
      {
        label: 'About',
        url: '/about',
      },
      {
        label: 'Speaking',
        url: '/speaking',
      },
    ],
    [
      'Follow me',
      {
        label: 'GitHub',
        url: 'https://github.com/maxpou',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/_maxpou',
        iconClassName: 'fa fa-twitter',
      },
      {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/maxpou/',
        iconClassName: 'fa fa-linkedin',
      },
    ],
  ],
}
