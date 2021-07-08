import * as React from "react";
import Navbar from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";
import Skills from "../components/skills";

// markup
const IndexPage = () => {

  return (
    <Navbar pageTitle="Home page">
      <h1>Hello, I am Vignesh.</h1>
      <p>Building my personal website using gatsby</p>
      <div>
        {/* <StaticImage
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Coding image"
        ></StaticImage> */}
      </div>
      <div>
     <Skills></Skills>
        
      </div>
    </Navbar>
  );
};

export default IndexPage;
