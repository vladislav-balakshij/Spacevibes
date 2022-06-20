import React from 'react';
import * as styles from './styles.module.scss';

const WideImageSection = ({ image }: any) => {
  return (
    <section className={styles.wideImageSection}>
      <img src={image} />
    </section>
  );
};

const ImageSection = ({ image }: any) => {
  return (
    <section className={styles.imageSection}>
      <div className="wrapper">
        <img src={image} />
      </div>
    </section>
  );
};

export { WideImageSection, ImageSection };
