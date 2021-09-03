import React from "react";

export default function Socials() {
  const socials = [
    {
      name: "github",
      link: "https://github.com/vignesh-cloud-prog",
      logo: "/socials/github.png",
    },

    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/vignesh-n-u/",
      logo: "/socials/linkedin.png",
    },
    {
      name: "twitter",
      link: "https://twitter.com/VigneshNU2",
      logo: "/socials/twitter.png",
    },
    {
      name: "mail",
      link: "mailto:vigneshun80@gmail.com?Subject=Why do you want to contact me?",
      logo: "/socials/gmail.png",
    },
    {
      name: "phone",
      link: "tel:+91 7338085595",
      logo: "/socials/phone.png",
    },

    {
      name: "facebook",
      link: "https://www.facebook.com/vignesh.viggi.775",
      logo: "/socials/facebook.png",
    },
    {
      name: "whatsapp",
      link: "https://wa.me/+917338085595?text=Hello, Vignesh",
      logo: "/socials/whatsapp.png",
    },

    {
      name: "instagram",
      link: "https://www.instagram.com/vignesh_n_u/",
      logo: "/socials/instagram.png",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/channel/UC-68331BAQTPn-sO1q3fB_w",
      logo: "/socials/youtube.png",
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
