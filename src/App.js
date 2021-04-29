import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import {
  About,
  Home,
  Products,
  Login,
  Review,
  Register,
  Profile,
} from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import Popup from "./components/Popup";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="mx-auto">
      <AuthProvider>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <ToastContainer position="bottom-right" />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
