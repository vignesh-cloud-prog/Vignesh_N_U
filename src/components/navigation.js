import React, { useRef } from "react";
import { Link } from "gatsby";
import {
  navbar,
  link,
  bar,
  hamburger,
  navMenu,
} from "../styles/navigation.module.css";
export default function Navigation() {
  const refNavLinks = useRef(null);
  const refBurger = useRef(null);
  function showNav(e) {
    if (refNavLinks.current.style.display === "flex")
      refNavLinks.current.style.display = "none";
    else refNavLinks.current.style.display = "flex";
    refBurger.current.classList.add("active");
  }
  return (
    <nav className={navbar}>
      <span>
        <Link to="/">{"<Vignesh/>"}</Link>
      </span>
      <span>
        <span ref={refNavLinks} id={navMenu}>
          <Link className={link} to="/projects">
            Projects
          </Link>
          <Link className={link} to="/blogs">
            Education
          </Link>
          <Link className={link} to="/tutorials">
            Blogs
          </Link>
          <Link className={link} to="/about">
            Experiance
          </Link>
          <Link className={link} to="/about">
            Open Source
          </Link>
          <Link className={link} to="/about">
            Contact Me
          </Link>
        </span>
        <div className={hamburger} ref={refBurger} onClick={showNav}>
          <span className={bar}></span>
          <span className={bar}></span>
          <span className={bar}></span>
        </div>
      </span>
    </nav>
  );
}
