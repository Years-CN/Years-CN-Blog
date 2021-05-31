import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div 
          css={css`
          margin: 0 auto;
          max-width: 1300px;
          display: flex;
          align-items: flex-start;
          `}
      >
        <div 
            css={css`
            display: flex;
            flex-wrap: wrap;
            flex: 2;
            width: 700px;
            `}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}
              css={css`
              min-width: 350px;
              flex: 1;
              background-image: linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%);
              padding: 15px;
              margin: 15px;
              border-radius: 5px;
              box-shadow:  20px 20px 60px #fafafa;
              `}
          >
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  {/* — {node.frontmatter.date} */}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`