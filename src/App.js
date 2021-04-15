import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import { About, Home, Products, Login, Review, Register } from "./pages";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="mx-auto max-w-screen-xl">
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
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
