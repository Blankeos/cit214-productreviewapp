import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {
  About,
  Home,
  Products,
  Login,
  Review,
  Register,
  Profile,
  Page404,
} from "./pages";

import PrivateRoute from "./components/PrivateRoute.js";

import { AuthProvider } from "./contexts/AuthContext";
// import Popup from "./components/Popup";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <div className="flex flex-col min-h-screen ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/review" component={Review} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="*" component={Page404} />
          </Switch>
          <ToastContainer position="bottom-right" />
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
