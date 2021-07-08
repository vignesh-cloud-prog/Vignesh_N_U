import * as React from "react";
import Layout from "../../../src/components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { container } from "../../styles/project-list.module.css"

const Projects = ({ data }) => {
  const projects = data.projects.nodes;

  return (
    <Layout pageTitle="My projects">
      <div>
        {projects.map((project) => (
          <div className={container}>
          <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
            <div>
              <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Projects;

export const query = graphql`
  query ProjectsList {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid(fit: COVER, maxWidth: 10, maxHeight: 4) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`;
