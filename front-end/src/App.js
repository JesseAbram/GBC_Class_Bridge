import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Kovan from "./components/pages/Kovan";
import Rinkeby from "./components/pages/Rinkeby";
import Page404 from "./components/pages/Page404";
import "./App.css";

class App extends Component {
  state = {};

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
              <Route path="/Rinkeby" component={Rinkeby} />
              <Route path="/Kovan" component={Kovan} />
              <Route component={Page404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
