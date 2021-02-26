import React from "react";

export default function Header() {
  return (
    <nav className="rNav">
      <div className="logo">Shop.</div>
      <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <i className="fa fa-search"></i>
        <i className="fa fa-shopping-basket ml-2"></i>
      </div>
    </nav>
  );
}
