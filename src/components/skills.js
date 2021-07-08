import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as Styles from "../styles/skills.module.css";

// icons downloaded from https://icons8.com/icon/set/javascript/color
export default function Skills() {
  // Querying data from json file
  const data = useStaticQuery(graphql`
    query skills {
      allSkillsJson {
        nodes {
          frameworks {
            language
            link
            name
            logo {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          languages {
            link
            name
            logo {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const frameworks = data?.allSkillsJson?.nodes[0]?.frameworks;
  const languages = data?.allSkillsJson?.nodes[1]?.languages;
 

  return (
    <div>
      <h1>skills</h1>
      <h2>Languages</h2>
      <div className={Styles.skills_box}>
        {/* mapping through languages */}
        {languages.map((languages) => (
          <div className={Styles.skill}>
            <Link to={languages?.link} key={languages?.name}>
              <div className={Styles.logo}>
                <GatsbyImage
                  image={getImage(languages?.logo)}
                  alt={languages?.name + " - logo"}
                />
              </div>
              <h3 className={Styles.logo_name}>{languages?.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <h2>Frameworks</h2>
      <div className={Styles.skills_box}>
        {/* mapping through frameworks */}
        {frameworks.map((frameworks) => (
          <div className={Styles.skill}>
            <Link to={frameworks?.link} key={frameworks?.name}>
            <div className={Styles.logo}>
              <GatsbyImage
                image={getImage(frameworks?.logo)}
                alt={frameworks?.name + " - logo"}
              />
            </div>
            <h3 className={Styles.logo_name}>{frameworks?.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
