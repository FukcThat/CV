import { createContext, useContext } from "react";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const test = "Test";
  const test2 = "Test 2";
  return (
    <GlobalContext.Provider value={{ test, test2 }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error(":(");
  console.log(context);
  return context;
};
