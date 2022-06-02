import React, { createContext, useState } from "react";

const baseState = { showMenu: false };

const GlobalContext = createContext({})

export default ({ children }: any) => {
  const [state, setState] = useState(baseState);
  return <GlobalContext.Provider value={{ state, setState }}>{children}</GlobalContext.Provider>
}

export { GlobalContext }