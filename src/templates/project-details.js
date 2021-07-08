import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export default function ProjectDetails({data}) {
    const {html}=data.markdownRemark;
    const {title, stack, featured}=data.markdownRemark.frontmatter;
    return (
        <Layout>
            <h1>{title}</h1>
            <h3>{stack}</h3>
            <div>
            <GatsbyImage
                image={getImage(featured)}
                alt={"featured image"}
              /></div>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>
    )
}

export const query=graphql`
query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
