import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'

export default function ProjectDetails({data}) {
    const {html}=data.markdownRemark;
    const {title, stack, featured}=data.markdownRemark.frontmatter;
    return (
        <Layout>
            <h1>{title}</h1>
            <h3>{stack}</h3>
            <div><Img fluid={featured.childImageSharp.fluid} /></div>
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
            fluid (maxWidth: 200) {
              base64
              aspectRatio
              src
              srcSet
              sizes      
            }
          }
        }
      }
    }
  }
`
