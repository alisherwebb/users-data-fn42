import React from "react";
import { Link } from "react-router-dom";

function Sitenav() {
  const sitenavLinks = [
    {
      path: "/",
      text: "Home",
      id: 1,
    },
    {
      path: "/about",
      text: "About",
      id: 2,
    },
    {
      path: "/contact",
      text: "Contact",
      id: 3,
    },
  ];

  return (
    <nav>
      <ul className="flex items-center gap-4">
        {sitenavLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sitenav;
