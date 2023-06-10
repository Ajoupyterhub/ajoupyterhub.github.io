import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'
//import Disqus from '../components/Disqus'
//import Utterances from '../components/Utterances'
import Giscus from '../components/Giscus'

class BlogPostTemplate extends React.Component {
  render() {
    if (!this.props.data) return null
    const post = this.props.data.post
    const children = this.props.children
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageShare={
            post.frontmatter.imageShare && post.frontmatter.imageShare.publicURL
          }
          lang={post.frontmatter.language}
          translations={post.frontmatter.translations}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <Hero
          heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          title={post.frontmatter.title}
        />

        <Wrapper role="main" id="main-content">
          <Article post={post} body={children} />
        </Wrapper>

        {/*
        <Wrapper as="aside">
          <Disqus slug={post.frontmatter.slug} title={post.frontmatter.title} />
        </Wrapper>
        */}
        {/* 
        <Wrapper as="aside">
          <Utterances /> /// slug={post.frontmatter.slug} title={post.frontmatter.title} /> 
        </Wrapper> */}

        <Wrapper as="aside">
          <Giscus slug={post.frontmatter.slug} title={post.frontmatter.title} />
        </Wrapper>

        <PrevNextPost previous={previous} next={next} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        slug
        language
        tags
        excerpt
        cover {
          publicURL
        }
        imageShare {
          publicURL
        }
      }
    }
  }
`
