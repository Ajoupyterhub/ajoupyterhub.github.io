const { createFilePath } = require('gatsby-source-filesystem')
const readingTime = require('reading-time')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const BlogPostTemplate = require.resolve('./src/templates/blog-post.js')
  const BlogPostShareImage = require.resolve(
    './src/templates/blog-post-share-image.js'
  )
  const PageTemplate = require.resolve('./src/templates/page.js')
  const PostsBytagTemplate = require.resolve('./src/templates/tags.js')
  const ListPostsTemplate = require.resolve(
    './src/templates/blog-list-template.js'
  )

  const allMarkdownQuery = await graphql(`
    {
      allMarkdown: allMdx(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { published: { ne: false } } }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              slug
              tags
              language
              cover {
                publicURL
              }
              excerpt
              unlisted
            }
            internal {
              contentFilePath
            }
            fields {
              timeToRead {
                text
              }
            }
          }
        }
      }
    }
  `)
  const tagsGroupQuery = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `)

  if (allMarkdownQuery.errors) {
    reporter.panic(allMarkdownQuery.errors)
  }

  const postPerPageQuery = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `)

  const markdownFiles = allMarkdownQuery.data.allMarkdown.edges

  const posts = markdownFiles.filter(item =>
    //item.node.fileAbsolutePath.includes('/content/posts/')
    item.node.internal.contentFilePath.includes('/content/blog/')
  )

  console.log('Posts start')
  posts.forEach(p => {
    // console.log(p.node?.frontmatter);
    // console.log(p.node?.frontmatter?.excerpt)
  })
  console.log('Posts end')

  const listedPosts = posts.filter(
    item => item.node.frontmatter.unlisted !== true
  )

  // generate paginated post list
  const postsPerPage = postPerPageQuery.data.site.siteMetadata.postsPerPage
  const nbPages = Math.ceil(listedPosts.length / postsPerPage)

  Array.from({ length: nbPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pages/${i + 1}`,
      component: ListPostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: nbPages,
      },
    })
  })

  // generate blog posts
  posts.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      //component: BlogPostTemplate,
      component: `${BlogPostTemplate}?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: {
        id: post.node.id, // Added
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })
    //})

    // generate post share images (dev only)
    if (process.env.gatsby_executing_command.includes('develop')) {
      createPage({
        path: `${post.node.frontmatter.slug}/image_share`,
        component: `${BlogPostShareImage}?__contentFilePath=${post.node.internal.contentFilePath}`,
        context: {
          slug: post.node.frontmatter.slug,
          width: 440,
          height: 220,
        },
      })
      console.log(post.node.frontmatter.slug)
    }
  })

  // generate pages

  markdownFiles
    //    .filter(item => item.node.fileAbsolutePath.includes('/content/pages/'))
    .filter(item =>
      item.node.internal.contentFilePath.includes('/content/pages/')
    )
    .forEach(page => {
      createPage({
        path: page.node.frontmatter.slug,
        component: `${PageTemplate}?__contentFilePath=${page.node.internal.contentFilePath}`, //
        //component: PageTemplate, //}?__contentFilePath=${page.node.internal.contentFilePath}`, //
        context: {
          slug: page.node.frontmatter.slug,
        },
      })
      console.log('page: ', page.node.frontmatter.slug)
    })

  // generate tag page

  const tags = tagsGroupQuery.data.tagsGroup.group

  /* markdownFiles
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
      []
    ) 
  */
  tags.forEach(uniqTag => {
    createPage({
      path: `tags/${uniqTag.fieldValue}`,
      component: PostsBytagTemplate, //`${PostsBytagTemplate}?__tag=${uniqTag}`, //.node.internal.contentFilePath}`, //
      context: {
        tag: uniqTag.fieldValue,
      },
    })
    console.log(uniqTag)
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })
  }
}
