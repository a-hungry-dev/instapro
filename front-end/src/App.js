//modules
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

//jwt-decode, store, setauth
//helpers
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

//actions
import { setCurrentUser } from "./actions/AuthActions";

//css
import "./App.css";

//components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";

//check auth token here

if (localStorage.token) {
  setAuthToken(localStorage.token);
  const decoded_token = jwt_decode(localStorage.token);
  store.dispatch(setCurrentUser(decoded_token));
  const currentTime = Date.now() / 1000;
  if (decoded_token.exp < currentTime) {
    // store.dispatch() logoutuser
    //
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      //provider for store here
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
