import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const handleLogin = (username) => {
    setToken(username);
  };
  const value = { token, handleLogin };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
