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

import PrivateRoute from "./components/PrivateRoute.js";
import NotAuthedRoute from "./components/NotAuthedRoute.js";
import { AuthProvider } from "./contexts/AuthContext";
// import Popup from "./components/Popup";

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
            <NotAuthedRoute path="/login">
              <Login />
            </NotAuthedRoute>
            <NotAuthedRoute path="/register">
              <Register />
            </NotAuthedRoute>
            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>
            <Route path="/products">
              <Products />
            </Route>
            <PrivateRoute path="/about">
              <About />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
          </Switch>
          <ToastContainer position="bottom-right" />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
