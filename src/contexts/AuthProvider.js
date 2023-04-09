import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user observing");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);





  //get speciality data from database
  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/consultation")
      .then((response) => response.json())
      .then((data) => setSpecialities(data));
  }, []);

  const authInfo = {
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    loading,
    user,
    specialities
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
