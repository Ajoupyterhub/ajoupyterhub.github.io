import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
//import Disqus from '../components/Disqus'

const Page = props => {
  const page = props.data.page
  const body = props.children
  return (
    <Layout location={props.location}>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter?.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter?.cover && page.frontmatter.cover?.publicURL}
      />

      <Hero
        heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        title={page.frontmatter.title}
      />

      <Wrapper role="main" id="main-content">
        <article>
          <Content content={body} date={page.frontmatter.date} />
        </article>
      </Wrapper>

      {/* page.frontmatter.disqus && (
        <Wrapper as="aside">
          <Disqus slug={page.frontmatter.slug} title={page.frontmatter.title} />
        </Wrapper>
      )*/}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query ($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        cover {
          publicURL
        }
        excerpt
      }
    }
  }
`
