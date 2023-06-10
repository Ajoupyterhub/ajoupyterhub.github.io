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

const Tags = ({ pageContext, data, location }) => {
  const pageTitle = `#${pageContext.tag}`
  const posts = data.posts.edges

  return (
    <Layout location={location}>
      <SEO title={`Top blog posts on ${pageContext.tag}`} />
      <Hero title={pageTitle} />

      <Wrapper role="main" id="main-content">
        <PageTitle>[#{pageContext.tag}] 글모음 </PageTitle>
        <PostsList posts={posts} />
      </Wrapper>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query PostsByTag($tag: [String]!) {
    posts: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: {
          tags: { in: $tag }
          published: { ne: false }
          unlisted: { ne: true }
        }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            tags
            language
            slug
            excerpt
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
`
/*
export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    posts: allMdx(
      sort: { frontmatter : { date : DESC }}
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
          fields {
            timeToRead {
              text
            }
          }
          frontmatter {
            title
            date
            tags
            language
            slug
            excerpt
          }
        }
      }
    }
  }
`
*/
