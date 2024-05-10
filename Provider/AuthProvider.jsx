import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(); // Create a context

const AuthProvider = ({ children }) => {
  /// Create states to store user data and loading state
  const [user, setUser] = useState(null); // Create a state to store user data
  const [loading, setLoading] = useState(true); // Create a state to store loading state
  const authinfo = { user, setUser, loading, setLoading }; // Create an object to store all the states

  // Create a function to create a user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
/
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    }); // Create a listener to check if the user is logged in or not
  }, []);

  // Return the provider with the value of the authinfo object
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
