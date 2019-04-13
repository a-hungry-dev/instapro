//modules
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//jwt-decode, store, setauth
//helpers
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

//actions

import "./App.css";

//components
// import Navbar from "./components/layout/Navbar";
import Registration from "./components/auth/Registration";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";

//check auth token here

class App extends Component {
  render() {
    return (
      //provider for store here
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Route exact path="/" component={Landing} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
