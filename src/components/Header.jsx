import React from "react";
import { Link } from "react-router-dom";
import Sitenav from "./Sitenav";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container flex">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to={"/"}>
            FN-42
          </Link>
        </div>
        <Sitenav />
      </div>
    </div>
  );
}

export default Header;
