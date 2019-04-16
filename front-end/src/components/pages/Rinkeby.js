import Header from "../layout/Header";
import React from "react";
import PropTypes from "prop-types";

class Rinkeby extends React.Component {
  state = {
    input: 0
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitRinkebyTransfer(this.state.input);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
        <Header />
        <h2 style={{ textAlign: "center" }}>Rinkeby to Kovan Bridge</h2>
        <div style={transferStyle}>
          <h5>Transfer Funds</h5>
          <form>
            <input
              type="text"
              name="input"
              placeholder={"Amount in Wei"}
              onChange={this.handleChange}
              value={this.state.input}
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

// PropTypes
Rinkeby.propTypes = {
  submitRinkebyTransfer: PropTypes.func.isRequired
};

const transferStyle = {
  textAlign: "center"
};

export default Rinkeby;
