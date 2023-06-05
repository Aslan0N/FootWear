import { createContext, useState } from "react";
import BestData from '../Data/BestSellers.json'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(BestData);

  // const [pages, setPages] = useState({
  //   men:"MEN'S",
  //   women:"WOMEN'S",
  // })

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};
