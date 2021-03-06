import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>GBC Bridge</h1>
      <Link style={linkStyle} to="/Rinkeby">
        Rinkeby (Not Active)
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/Kovan">
        Kovan
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};
