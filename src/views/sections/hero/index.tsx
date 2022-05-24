import React from 'react';
import * as styles from './styles.module.scss'
import Button from "../../elements/buttons/buttons";

const HeroSection = () => {
  return (
    <div className={'wrapper'}>
      <div className={styles.heroSection}>
        <h1>I design better digital products to help my clients build better customer experiences.</h1>
        <Button>My approach</Button>
        <div className="overline">Toronto based. Human-centric designs.</div>
        <p>I work with financial institutions, government ministries, and health industry to conceptualize and design
          custom digital products, websites and apps.</p>
      </div>
    </div>
  );
};

export default HeroSection;
