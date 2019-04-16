import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Kovan from "./components/pages/Kovan";
import Rinkeby from "./components/pages/Rinkeby";
import Page404 from "./components/pages/Page404";
import CREDENTIALS from "./credentials";
import "./App.css";

class App extends Component {
  state = {};

  submitKovanTransfer = async amount => {
    const contract = window.web3.eth
      .contract(CREDENTIALS.ABI)
      .at(CREDENTIALS.ADDRESS);

    if (window.web3 === undefined) {
      return window.alert(
        `Please download the browser extension "Metamask" to use the bridge`
      );
    }

    const publicAddress = window.web3.eth.coinbase;
    let netId = await window.web3.version.network;

    if (publicAddress == null) {
      window.alert(
        'You must be logged in to the browser extension "MetaMask" to use the bridge'
      );
    } else if (netId !== "42") {
      window.alert("You must select the Rinkeby test network in MetaMask");
    } else {
    }
    console.log(netId);
    console.log("Sending from account: " + publicAddress);

    contract.connect((error, result) => {
      if (!error) {
        console.log("Tx: " + result);
      }
    });
  };

  submitRinkebyTransfer = async amount => {};

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <Header />
                  </React.Fragment>
                )}
              />
              <Route
                path="/Rinkeby"
                render={props => (
                  <Rinkeby
                    {...props}
                    submitRinkebyTransfer={this.submitRinkebyTransfer}
                  />
                )}
              />
              <Route
                path="/Kovan"
                render={props => (
                  <Kovan
                    {...props}
                    submitKovanTransfer={this.submitKovanTransfer}
                  />
                )}
              />
              <Route component={Page404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
