import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import colors from '../tokens/colors'

const GlobalPageStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Rubik', sans-serif;
  }
`

const Wrapper = styled.div.attrs({
  width: props => props.width || 440,
  height: props => props.height || 220,
})`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  background-color: ${colors.socialMediaCardFilter};
  position: relative;
`

const Square = styled.div.attrs({
  width: props => props.width || 440,
  height: props => props.height || 220,
})`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  position: absolute;
  outline: 3px solid #fff !important;
  outline-offset: -25px;
`

const Preview = styled.div.attrs({
  width: props => props.width || 440,
  height: props => props.height || 220,
  hero: props => props.hero || withPrefix(props.siteCover),
})`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url("${props => props.hero}");
  background-position: center;
  background-size: cover;
  position: absolute;
  opacity: 0.5;
`

const Title = styled.h1.attrs({
  fontSize: props => (props.type === 'twitter' ? '1.8rem' : '4.8rem'),
})`
  font-weight: 700;
  font-size: ${props => props.fontSize};
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  text-align: center;
  z-index: 1;
`

const SiteTitle = styled.p.attrs({
  fontSize: props => (props.type === 'twitter' ? '1rem' : '2.6rem'),
})`
  font-size: ${props => props.fontSize};
  left: 50%;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 22px;
  background-color: #fff;
  padding: 1px 5px 1px 5px;
  transform: translate(-50%);
`

const AuthorImg = styled.img.attrs({
  size: props => (props.type === 'twitter' ? '40px' : '52px'),
})`
  height: ${props => props.size};
  width: ${props => props.size};
  border-radius: ${props => props.size};
  display: inline-block;
  vertical-align: middle;
`

const SubTitle = styled.div`
  vertical-align: middle;
  text-align: center;
  font-weight: 700;
  z-index: 1;
`

const ReadTime = styled.span.attrs({
  fontSize: props => (props.type === 'twitter' ? '1rem' : '2rem'),
})`
  font-size: ${props => props.fontSize};
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  color: #fff;
  padding-left: 8px;
`

const BlogPostShareImage = props => {
  const post = props.data.post
  const { width, height, type } = props.pageContext
  const heroImg = post.frontmatter.cover && post.frontmatter.cover.publicURL
  const { siteCover, authorAvatar } = useSiteMetadata()
  const { fixed } = useSiteImages(authorAvatar)

  return (
    <Wrapper width={width} height={height}>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
        rel="stylesheet"
      />
      <GlobalPageStyle />

      <SiteTitle type={type}>maxpou.fr</SiteTitle>
      <Title type={type}>{post.frontmatter.title}</Title>
      <SubTitle>
        <AuthorImg type={type} src={fixed.src} />
        <ReadTime type={type}>{post.timeToRead} min read</ReadTime>
      </SubTitle>
      <Preview
        width={width}
        height={height}
        hero={heroImg}
        siteCover={siteCover}
      />
      <Square width={width} height={height} />
    </Wrapper>
  )
}

export default BlogPostShareImage

export const pageQuery = graphql`
  query BlogPostShareImage($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      frontmatter {
        title
        cover {
          publicURL
        }
      }
    }
  }
`
