import React from 'react';
import '../../styles/basic.scss'

function MainLayout({ children } : any) {
  return (
    <main>
      {children}
    </main>
  );
}

export default MainLayout;
