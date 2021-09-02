import { Link } from "gatsby";
import React from "react";

export default function Socials() {
  const socials = [
    {
      name: "github",
      link: "",
      logo: "/socials/github.png",
    },

    {
      name: "linkedin",
      link: "",
      logo: "/socials/linkedin.png",
    },
    {
      name: "twitter",
      link: "",
      logo: "/socials/twitter.png",
    },
    {
      name: "facebook",
      link: "",
      logo: "/socials/facebook.png",
    },

    {
      name: "instagram",
      link: "",
      logo: "/socials/instagram.png",
    },
  ];
  return (
    <div>
      {socials.map((social) => (
        <a href={social.link} key={social.name}>
          <img src={social.logo} alt={social.name} title={social.name} />
        </a>
      ))}
    </div>
  );
}
