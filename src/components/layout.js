import React from "react";
import { Link,graphql,useStaticQuery } from "gatsby";
import { navbar,title, container } from "./css/layout.module.css";

export default function Navbar({ pageTitle, children }) {
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
   
`)
  return (
    <main>
      <nav className={navbar} >
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/tutorials">Tutorials</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1 className={title}>{pageTitle}</h1>
      <div className={container}>
      {children}
      </div>
      
    </main>
  );
}

