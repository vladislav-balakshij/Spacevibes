import React, { useCallback } from 'react';
import * as styles from './style.module.scss'

function Heading({level, children}) {
  const heading = useCallback(() => {
    switch (level) {
      case 1: return <h1 className={styles.h1}>{children}</h1>;
      case 2: return <h2 className={styles.h2}>{children}</h2>;
      case 3: return <h3 className={styles.h3}>{children}</h3>;
      case 4: return <h4 className={styles.h4}>{children}</h4>;
      case 5: return <h5 className={styles.h5}>{children}</h5>;
    }
  },[])
  return heading()
}

function Overline({children}){
  return <div className={styles.overline}>{children}</div>
}

export {Heading, Overline};
