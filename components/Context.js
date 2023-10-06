import React, { useState, createContext } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [searchedData, setSearchedData] = useState({
    searchedDataFounded:[],
    query:''
  });

  return (
    <MyContext.Provider value={[searchedData, setSearchedData]}>
      {children}
    </MyContext.Provider>
  );
};

export {MyContext,MyContextProvider}