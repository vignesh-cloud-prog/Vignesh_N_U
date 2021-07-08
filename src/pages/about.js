import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

export default function About() {
  return (
    <Layout pageTitle="About page">
      <h1>I am vignesh</h1>
      <i>a software developer</i>
      <div >
        <StaticImage 
          src="../images/codingsuit.jpg"
          alt="a coder image"></StaticImage>
      </div>
    </Layout>
  );
}
