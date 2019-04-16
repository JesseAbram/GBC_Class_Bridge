import React from "react";
import TxHash from "./TxHash";

export default function Transfer() {
  return (
    <React.Fragment>
      <div style={transferStyle}>
        <h5>Transfer Funds</h5>
        <form>
          <input placeholder={"Amount in Wei"} />
          <button type={"submit"}>Send</button>
        </form>
        <TxHash/>
      </div>
    </React.Fragment>
  );
}

const transferStyle = {
  textAlign: "center"
};
