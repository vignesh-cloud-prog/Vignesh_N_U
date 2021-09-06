import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as Styles from "../styles/skills.module.css";

// icons downloaded from https://icons8.com/icon/set/javascript/color
export default function Skills() {
  // Querying data from json file
 
  const data = useStaticQuery(graphql`
    query skills {
      allJson {
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
  console.log(data);
  const frameworks = data.allJson.nodes[1].frameworks;
  const languages = data.allJson.nodes[2].languages;

  return (
    <div>
      <h1>skills</h1>
      <h2>Languages</h2>
      <div className={Styles.skills_box}>
        {/* mapping through languages */}
        {languages?.map((language) => (
          <div className={Styles.skill} key={language?.name}>
              <a href={language?.link}>
              <div className={Styles.logo}>
                <GatsbyImage
                  image={getImage(language?.logo)}
                  alt={language?.name + " - logo"}
                />
              </div>
              <h3 className={Styles.logo_name}>{language?.name}</h3>
              </a>
          </div>
        ))}
      </div>
      <h2>Frameworks</h2>
      <div className={Styles.skills_box}>
        {/* mapping through frameworks */}
        {frameworks?.map((framework) => (
          <div className={Styles.skill} key={framework?.name}>
              <a href={framework?.link} >
            <div className={Styles.logo}>
              <GatsbyImage
                image={getImage(framework?.logo)}
                alt={framework?.name + " - logo"}
              />
            </div>
            <h3 className={Styles.logo_name}>{framework?.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
