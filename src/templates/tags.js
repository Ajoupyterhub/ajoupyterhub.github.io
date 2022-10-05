import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

const PageTitle = styled.h1`
  padding-bottom: 15px;
  text-align: center;
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
`

class Tags extends React.Component {
  render() {
    const pageTitle = `#${this.props.pageContext.tag}`
    const posts = this.props.data.posts.edges

    return (
      <Layout location={this.props.location}>
        <SEO title={`Top blog posts on ${this.props.pageContext.tag}`} />
        <Hero title={pageTitle} />

        <Wrapper>
          <PageTitle>[#{this.props.pageContext.tag}] 글모음 </PageTitle>
          <PostsList posts={posts} />
        </Wrapper>
      </Layout>
    )
  }
}

export default Tags

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          tags: { eq: $tag }
          published: { ne: false }
          unlisted: { ne: true }
        }
      }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            language
            slug
          }
        }
      }
    }
  }
`
