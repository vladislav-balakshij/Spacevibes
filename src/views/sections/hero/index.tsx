import React from 'react';
import * as styles from './styles.module.scss'

const HeroSection = ({ children }: { children?: any }) => {
  return (
    <div className={'wrapper'}>
      <div className={styles.heroSection}>
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
