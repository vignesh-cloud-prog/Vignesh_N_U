import * as React from "react";
import Layout from "../../../src/components/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as Styles from "../../styles/project-list.module.css";

const Projects = ({ data }) => {
  const projects = data.projects.nodes;

  return (
    <Layout pageTitle="My projects">
      <h1>Projects</h1>
      <div className={Styles.container}>
        {projects.map((project) => (
          <div className={Styles.item}>
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div className={Styles.head}>
                <h2>{project.frontmatter.title}</h2>
                <small>{project.frontmatter.date}</small>
              </div>
            
                
                  <GatsbyImage
                    image={getImage(project.frontmatter?.thumb)}
                    alt={"thumbnail"}
                  />
            
            <div className={Styles.body}>
                <p>Domain: {project.frontmatter.domains}</p>
                <p>Tech: {project.frontmatter.stack}</p>
              </div>
            </Link>
            <div className={Styles.action}>
              <a className={Styles.btn} href={project.frontmatter.code_link}>
                Github
              </a>
              <a className={Styles.btn} href={project.frontmatter.project_link}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Projects;

export const query = graphql`
  query ProjectsList {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(width:800 height:300)
            }
          }
          date(formatString: "DD MMM YYYY")
          code_link
          domains
          project_link
        }
        id
      }
    }
  }
`;
