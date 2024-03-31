import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase-config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)

      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const singInUser = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      }


      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  console.log("observing current user inside useEffect of AuthProvider", currentUser);
            })
            return () => {
                  unSubscribe();
            }
      }, [])
      

      const logOut = () => {
            return signOut(auth)
      }

      const authInfo = { user, createUser, singInUser, logOut }
      

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;