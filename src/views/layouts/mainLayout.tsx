import React, { useState } from 'react';
import '../../styles/basic.scss'
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Menu from "../components/Menu/menu";

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