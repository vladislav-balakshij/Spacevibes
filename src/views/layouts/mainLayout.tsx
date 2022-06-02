import React, { useState } from 'react';
import '../../styles/basic.scss'
import { Header, Footer, Menu } from "@components";

// @ts-ignore
const GlobalContext = React.createContext();

const MainLayout = ({ children }: any) => {
  const [state, setState] = useState({ showMenu: false })

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {state.showMenu && <Menu />}

      <Header />

      <main>
        {children}
      </main>
      <Footer />
    </GlobalContext.Provider>
  );
}

export { MainLayout, GlobalContext };