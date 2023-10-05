import React, { useState, createContext } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState({
    appsFounded:[],
    appsChecked:[]
  });

  return (
    <MyContext.Provider value={[data, setData]}>
      {children}
    </MyContext.Provider>
  );
};

export {MyContext,MyContextProvider}