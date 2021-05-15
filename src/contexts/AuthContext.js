import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { addNewUser } from "../services/restServices";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [authStateChecked, setAuthStateChecked] = useState(false);

  async function register(email, password, displayName) {
    const something = await addNewUser(
      createToken,
      email,
      password,
      displayName
    );
    login(email, password);
    return something;
    // return auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     userCredential.user
    //       .updateProfile({
    //         displayName: displayName,
    //       })
    //       .then(
    //         () => {
    //           // Profile updated successfully!

    //           var displayName = userCredential.user.displayName;
    //         },
    //         (err) => {
    //           console.log("Error trying to add displayName");
    //         }
    //       );

    //     return userCredential;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    auth.signOut();
  }

  async function createToken() {
    const user = currentUser;
    const token = user && (await user.getIdToken());
    const payloadHeader = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return payloadHeader;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setAuthStateChecked(true);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    logout,
    authStateChecked,
    createToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
