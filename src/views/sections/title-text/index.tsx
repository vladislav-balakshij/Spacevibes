import React from 'react';
import * as styles from './styles.module.scss';

const TitleTextSection = ({ title, text, theme, children }: any) => {
  return (
    <div className='wrapper'>
      <section className={styles.titleTextSection}>
        <h4>{title}</h4>
        <p>{text}</p>
        {children}
      </section>
    </div>
  );
};

export default TitleTextSection;
