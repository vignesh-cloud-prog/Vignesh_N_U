import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery,Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export default function Tutorials() {
  const data = useStaticQuery(graphql`
    query Courses {
      allCoursesJson {
        nodes {
          id
          name
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
        }
      }
    }
    
  `);

  return (
    <Layout pageTitle="Tutorials">
      <h1>Tutorials </h1>
      {data.allCoursesJson.nodes.map((course)=>(
        <div key={course.id}>
        <Link to={course.slug}>
        <GatsbyImage image={getImage(course?.thumb)}
                  alt={course.name + " - Thumbnail"}/>
        <h1>{course.name}</h1>
        </Link>
        </div>
      ))}
    </Layout>
  );
}
