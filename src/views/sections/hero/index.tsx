import React from 'react';
import * as styles from './styles.module.scss'
import Button from "../../elements/buttons";
import { Overline } from "@elements";

const HeroSection = () => {
  return (
    <div className={'wrapper'}>
      <section className={styles.heroSection}>
        <h1>I design better digital products to help my clients build better customer experiences.</h1>
        <Button>My approach</Button>
        <footer className={styles.footer}>
          <Overline>Toronto based. Human-centric designs.</Overline>
          <p>
            I work with financial institutions, government ministries, and health industry to conceptualize and design
            custom digital products, websites and apps.
          </p>
        </footer>
      </section>
    </div>
  );
};

export default HeroSection;
