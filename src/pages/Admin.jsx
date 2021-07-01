import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Context
import { AdminAuthProvider } from "../contexts/AdminAuthContext";
import PrivateAdminRoute from "../components/Admin/PrivateAdminRoute";

// Components
import AdminLogin from "../components/Admin/AdminLogin";
import AdminDashboard from "../components/Admin/AdminDashboard";

const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Cafe.ly | Admin</title>
        <meta name="title" content="Cafe.ly | Admin" />
        <meta
          name="description"
          content="User Reviews and Recommendations of Best Tasting Coffee at Cafe.ly. Defining the best coffee experience. In culture, in taste!"
        />
      </Helmet>

      <>
        <AdminAuthProvider>
          <Switch>
            <Route exact path="/admin" component={AdminLogin} />
            <PrivateAdminRoute
              exact
              path="/admin/dashboard"
              component={AdminDashboard}
            />
          </Switch>
        </AdminAuthProvider>
      </>
    </>
  );
};

export default Admin;
