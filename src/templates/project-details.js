import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as Styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, featured,date,domains,code_link,project_link } = data.markdownRemark.frontmatter;
  return (
    <Layout pageTitle={title}>
      <h1>{title}</h1>
      <small>{date}</small>
      <h3>Stack: {stack}</h3>
      <h3>Domain: {domains}</h3>
      <div>
        <GatsbyImage image={getImage(featured)} alt={"featured image"} />
      </div>
      <div className={Styles.body} dangerouslySetInnerHTML={{ __html: html }} />
      <div className={Styles.action}>
              <a className={Styles.btn} href={code_link}>
                Github
              </a>
              <a className={Styles.btn} href={project_link}>
                View Project
              </a>
            </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            gatsbyImageData(width:1400 height:400)
          }
        }
        date(formatString: "DD MMM YYYY")
        code_link
        domains
        project_link
      }
    }
  }
`;
