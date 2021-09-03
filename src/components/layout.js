import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { title, container } from "../styles/layout.module.css";
import Navigation from "./navigation";

export default function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          description
          title
        }
      }
    }
  `);
  return (
    <div>
      <Navigation />
      <main>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>

        <div className={container}>{children}</div>
      </main>
    </div>
  );
}
