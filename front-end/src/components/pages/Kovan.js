import Header from "../layout/Header";
import React from "react";
import PropTypes from "prop-types";

class Kovan extends React.Component {
  state = {
    input: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitKovanTransfer(this.state.input);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
        <Header />
        <h2 style={{ textAlign: "center" }}>Kovan to Rinkeby Bridge</h2>
        <div style={transferStyle}>
          <h5>Transfer Funds</h5>
          <input
            type="text"
            name="input"
            placeholder={"Amount in Wei"}
            onChange={this.handleChange}
            value={this.state.input}
          />
          <button type="submit" value="Send" onClick={this.handleSubmit}>
            Send
          </button>
        </div>
      </React.Fragment>
    );
  }
}

// PropTypes
Kovan.propTypes = {
  submitKovanTransfer: PropTypes.func.isRequired
};
const transferStyle = {
  textAlign: "center"
};

export default Kovan;
