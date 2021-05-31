import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Pic from "../timg.jpg"

export default ({ children }) => {
    // const data = useStaticQuery(
    //     graphql`
    //       query {
    //         site {
    //           siteMetadata {
    //             title
    //           }
    //         }
    //       }
    //     `
    //   )

    return (
      <div>
        <header 
            css={css`
            background: #fff;
            position: sticky;
            top: 0;
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            border-bottom: 1px solid #f0f0f2;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            `}>
        <Link to={`/`}>
            <div
                css={css`
                display: flex;
                align-items: center;
                padding: 5px 0;
                `}>
            <img src={Pic}
                alt="me"
                css={css`
                width: 80px;
                margin: 0px 10px 0 20px;
                `}
            />
            </div>
         </Link>
            <div 
                css={css`
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: 1.2rem;
                margin: 0 20px 0 0;
                `}
            >
            </div>
        </header>
        <div>
            {/* <Link
            to={`/about/`}
            css={css`
                float: right;
            `}
            >
            About
            </Link> */}
            {children}
        </div>
        <footer
            css={css`
            position: relative;
            bottom: 0;
            padding: 20px;
            text-align: center;
            
            `}
        >
          Copyright © 2021 Years_CN Built with Gatsby.
        </footer>
      </div>
    )

  
}