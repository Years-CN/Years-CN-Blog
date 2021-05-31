import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default ({ data }) => {
  
  console.log(data);
  const post = data.markdownRemark;
  return (
    <Layout>
      <div
          css={css`
          background-color: #F9FAFB;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          `}
      >
        <div 
            css={css`
            background-color: white;
            margin: 0 20px;
            width: 1000px;
            max-width: 1000px;
            padding: 2.2em;
            border-radius: 5px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            `}
        >
          <h1>{post.frontmatter.title}</h1>
          {/* <p>{post.frontmatter.date}</p> */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div 
            css={css`
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            padding: 1.2em;
            `}
        >
          <h3>近期文章</h3>
          {
            data.allMarkdownRemark.edges.map(({node}) => 
              <Link 
                to={ node.fields.slug }
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <p key={node.id}>{node.frontmatter.title}</p>
              </Link>
            )
          }
        </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
    allMarkdownRemark(limit: 5) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`