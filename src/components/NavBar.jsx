import React from "react";
import { Link } from "react-router-dom";
import ShoppingCarElement from "../components/ShoppingCarIcon"

export default function NavBar() {
  return (
    <div>
      <ul className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart"><ShoppingCarElement /></Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
