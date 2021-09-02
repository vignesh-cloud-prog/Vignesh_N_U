import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Skills from "../components/skills";
import Introduction from "../components/introduction";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <Introduction/>
     
    </Layout>
  );
};

export default IndexPage;
