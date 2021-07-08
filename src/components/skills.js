import React from 'react'
import { graphql,useStaticQuery } from 'gatsby'
import Img from "gatsby-image"

export default function Skills() {
    const data=useStaticQuery(graphql`
    query skills{allSkillsJson {
      nodes {
        frameworks {
          name
          link
          language
          logo {
            childImageSharp {
              fluid(maxWidth: 5, maxHeight: 5) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        languages {
          link
          name
          logo {
            childImageSharp {
              fluid(maxWidth: 2, maxHeight: 2) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
    `
    )
    console.log(data);
    const languages=data.allSkillsJson.nodes[1].languages
    const frameworks=data.allSkillsJson.nodes[0].frameworks

    console.log(languages);
    console.log(frameworks);
    return (
        <div>
            <h1>skills</h1>
            <h2>Languages</h2>
            {languages.map((languages)=>(
              <div>
                <h2>{languages.name}</h2>
                <Img fluid={languages?.logo?.childImageSharp?.fluid}/>
              </div>
            ))}
            <h2>Frameworks</h2>
            {frameworks.map((frameworks)=>(
              <div>
                <h2>{frameworks.name}</h2>
                <Img fluid={frameworks?.logo?.childImageSharp?.fluid}/>
              </div>
            ))}
        </div>
    )
}

