import React from 'react';
import { Header, Footer, Menu } from "@components";
import Provider from "@state";

const MainLayout = ({ children }: any) => (
  <Provider>
    <Menu />
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </Provider>
)

export default MainLayout