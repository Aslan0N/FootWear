import { createContext, useState } from "react";
import BestData from '../Data/BestSellers.json'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(BestData);


  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
