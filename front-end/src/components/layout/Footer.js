import React from "react";
import { Link } from "react-router-dom";

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
    <li>
      <Link key={link.display} className="p-2 text-info" to={link.route}>
        {link.display}
      </Link>
    </li>
  ));
  return (
    <div className="footer">
      <footer className="navbar fixed-bottom bg-white mt-5 p-4 text-center">
        <div className="container">
          <ul className="d-inline-flex list-inline">{footerLinks}</ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
