import Header from "../layout/Header";
import React from "react";
import Transfer from "./Transfer";

export default function Rinkeby() {
  return (
    <React.Fragment>
      <Header />
      <h2 style={{ textAlign: "center" }}>Rinkeby to Kovan Bridge</h2>
      <Transfer />
    </React.Fragment>
  );
}
