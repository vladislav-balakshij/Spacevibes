import React from 'react';
import * as styles from './styles.module.scss';

const LabelTitleSection = ({ label, title }: any) => {
  return (
    <div className='wrapper'>
      <section className={styles.labelTitleSection}>
        <p>{label}</p>
        <h1>{title}</h1>
      </section>
    </div>
  );
};

export default LabelTitleSection;
