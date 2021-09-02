import React from "react";
import Socials from "./socials";
import * as Styles from "../styles/introduction.module.css";
export default function Introduction() {
  return (
    <div className={Styles.introduction}>
      <div id={Styles.left}>
        <h1 id={Styles.title}>Vignesh N U</h1>
        <header id={Styles.description}>
          A passionate individual who always thrives to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </header>
        <div id="socials">
          <Socials />
        </div>
        <div id="actions">
          <button className={Styles.btn}>Contact</button>
          <button className={Styles.btn}>View Resume</button>
        </div>
      </div>
      <div id={Styles.right}>
        <img id={Styles.image} src="/feeling_proud.svg" alt="greeting" />
      </div>
    </div>
  );
}
