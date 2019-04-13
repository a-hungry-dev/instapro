import React from "react";
import { Link } from "react-router-dom";

//css
import "./Footer.css";
const Footer = () => {
  const footerLinksArray = [
    { display: "Support", route: "/about" },
    { display: "Press", route: "/about" },
    { display: "Api", route: "/about" },
    { display: "Jobs", route: "/about" },
    { display: "Privacy", route: "/about" },
    { display: "Terms", route: "/about" },
    { display: "Directory", route: "/about" },
    { display: "Profiles", route: "/about" },
    { display: "Hashtags", route: "/about" },
    { display: "Language", route: "/about" }
  ];
  const footerLinks = footerLinksArray.map(link => (
    <li key={link.display}>
      <Link className="p-2 text-info" to={link.route}>
        {link.display}
      </Link>
    </li>
  ));
  return (
    <footer className="navbar p-4 text-center">
      <div className="container">
        <ul className="d-inline-flex list-inline">{footerLinks}</ul>
      </div>
    </footer>
  );
};

export default Footer;
