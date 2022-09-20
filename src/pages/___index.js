import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import PostList from '../components/PostsList'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
       filter: {
        fileAbsolutePath: { regex: "//content/posts//" }
      }
      limit : 5 
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            tags
            excerpt
            slug
          }
        }
      }
    }
  }
  `);
    if (data == undefined) {
      console.log("undefined data")
    }
    console.log(data, data.site)
    return (
        <PostList data={data}/>
    )
}

export default IndexPage;

//export const pageQuery = graphql`
//`
