import React from 'react';
import '../../styles/basic.scss'
import Header from "../components/Header/header";

function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default MainLayout;
