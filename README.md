[![Build Status](https://travis-ci.org/maxpou/gatsby-starter-morning-dew.svg?branch=master)](https://travis-ci.org/maxpou/gatsby-starter-morning-dew) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


# gatsby-starter-morning-dew

Gatsby starter for creating a new blog!

## Installation


* with Gatsby-cli: `gatsby new gatsby-blog https://github.com/maxpou/gatsby-starter-morning-dew`

* without Gatsby-cli

  ```sh
  git clone my-site git@github.com:maxpou/gatsby-starter-morning-dew.git
  cd my-site
  yarn install
  ```

## Features

- [:purple_heart: Gatsby v2](https://www.gatsbyjs.org/) / React 16
- :mag: SEO optimized (robot.txt)
- :love_letter: Write posts/pages in Markdown
  - :art: Code syntax
- :iphone: Responsive design
- :sparkles: PWA ready
  - :airplane: Offline support
  - :page_with_curl: Manifest support 
- [:wrench: Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- :speech_balloon: Disqus support
- :bookmark: Groups post with tags
- :bar_chart: Google Analytics support
- :books: Multilang support
- :gem: Developer tools:
  - eslint
  - prettier
- :construction_worker: Travis CI support


![Lighthouse scores (locally :bowtie:)](https://lighthouse.now.sh/?perf=98&pwa=81&a11y=92&bp=100&seo=100)


## Commands

```sh
# working locally
yarn dev

# generate build
yarn build

# format code
yarn format

# lint code
yarn lint
```

**:warning: Add `--prefix-paths` if you are using path prefix!**
