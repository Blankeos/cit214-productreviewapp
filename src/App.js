import "./styles/App.css";
import "./styles/select-search.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  ProductPage,
  AccountSettings,
} from "./pages";

import PrivateRoute from "./components/PrivateRoute.js";

import { AuthProvider } from "./contexts/AuthContext";
// import Popup from "./components/Popup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";

import TokenTestForm from "./TokenTestForm"; // TEST please delete later

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Nav />
        <div className="flex flex-col min-h-screen ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute
              path="/review/:slug"
              customToast={`😓 You need to login before review`}
              toastDuration={2000}
              component={Review}
            />
            <PrivateRoute
              path="/review"
              customToast={`😓 You need to login before review`}
              toastDuration={2000}
              component={Review}
            />
            <Route path="/products/:slug" component={ProductPage} />
            <Route exact path="/products" component={Products} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/accountSettings" component={AccountSettings} />
            <Route path="/tokenTest" component={TokenTestForm} />
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
