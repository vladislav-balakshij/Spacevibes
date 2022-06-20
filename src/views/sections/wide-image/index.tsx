import React from 'react';
import * as styles from './styles.module.scss';

const WideImageSection = ({ image }: any) => {
  return (
    <section className={styles.wideImageSection}>
      <img src={image} />
    </section>
  );
};

export default WideImageSection;
