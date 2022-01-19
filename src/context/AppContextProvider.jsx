import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [IsAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("abcde");
  const value = { IsAuth, token, setIsAuth, setToken };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider };
