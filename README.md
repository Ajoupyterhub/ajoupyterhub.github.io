[![Build Status](https://travis-ci.org/maxpou/gatsby-starter-morning-dew.svg?branch=master)](https://travis-ci.org/maxpou/gatsby-starter-morning-dew) [![Netlify Status](https://api.netlify.com/api/v1/badges/d68027bd-19b5-44fd-a2a3-d1f05fc8201e/deploy-status)](https://app.netlify.com/sites/gatsby-starter-morning-dew/deploys) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Maintainability](https://api.codeclimate.com/v1/badges/e09f1ac1a5cdb2987a6f/maintainability)](https://codeclimate.com/github/maxpou/gatsby-starter-morning-dew/maintainability) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)



# gatsby-starter-morning-dew

Gatsby starter for creating a new blog!

[Demo website.](https://maxpou.github.io/gatsby-starter-morning-dew/)

![screenshot](https://i.imgur.com/aRTBbKs.jpg)

## Features

- [:purple_heart: Gatsby v2](https://www.gatsbyjs.org/) / React 16
- :mag: SEO optimized
- :love_letter: Write posts/pages in Markdown
  - :art: Code syntax highlight
  - :books: Multilang support (blog post)
- :iphone: Mobile Friendly (Responsive design)
- :sparkles: PWA ready
  - :airplane: Offline support
  - :page_with_curl: Manifest support 
- [:wrench: Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- :speech_balloon: Disqus support
- :nail_care: css-in-js (with [styled-components v4](https://www.styled-components.com))
- :bookmark: Groups post with tags
- :bar_chart: Google Analytics support
- :bird: post preview image generation (Twitter, Facebook)
- :gem: Developer tools:
  - eslint
  - prettier
- :construction_worker: Travis CI support


![Lighthouse scores (locally :bowtie:)](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)


## Installation

* with Gatsby-cli: `gatsby new gatsby-blog https://github.com/maxpou/gatsby-starter-morning-dew`

* without Gatsby-cli

  ```sh
  git clone my-site git@github.com:maxpou/gatsby-starter-morning-dew.git
  cd my-site
  npm install
  ```

## Commands

```sh
# working locally
npm run dev

# generate build
npm run build

# format code
npm run format

# lint code
npm run lint

# Generate generate post preview images (npm run dev need to run before)
npm run generatePostPreviewImages
```

**:warning: Add `--prefix-paths` if you are using path prefix!**

## Configure

```js
module.exports = {
  siteTitle: 'gatsby-starter-morning-dew',
  siteDescription: "👋 Hey I'm a Gatsby starter!",
  authorName: 'Maxence Poutord',
  twitterUsername: '_maxpou',
  authorAvatar: '/images/avatar.jpeg',
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also a frequent tech speaker and a mentor.
  As a new digital nomad, he is living where the WIFI and sun is 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://maxpou.github.io/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
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
      url: '/gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
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
          url: '/gatsby-starter-morning-dew',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/maxpou/gatsby-starter-morning-dew',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/_maxpou',
        },
      ],
    },
  ],
}
```