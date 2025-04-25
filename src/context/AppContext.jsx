import { createContext } from "react";
import { concertsData, announcementData, newsData } from "../assets/database";

export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const value = { concertsData, announcementData, newsData };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
