import React from 'react';
import '../../styles/basic.scss'
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const MainLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export { MainLayout };
