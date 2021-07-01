import React, { useContext, useEffect, useState } from "react";
import { loginAsAdmin } from "../services/restServices";

const AdminAuthContext = React.createContext();

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}

export function AdminAuthProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  // const [authStateChecked, setAuthStateChecked] = useState(false);

  async function login(username, password) {
    const { authed } = await loginAsAdmin(username, password);
    setIsAuthorized(authed);
    return authed;
  }

  const value = {
    isAuthorized,
    login,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
}
