import Header from "../layout/Header";
import React from "react";
import Transfer from "../Transfer";

export default function Kovan() {
  return (
    <React.Fragment>
      <Header />
      <h2 style={{ textAlign: "center" }}>Kovan to Rinkeby Bridge</h2>
      <Transfer />
    </React.Fragment>
  );
}
