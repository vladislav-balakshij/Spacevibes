import React from 'react';
import * as styles from './styles.module.scss';

const TitleTextSection = ({ title, text, theme }: any) => {
  return (
    <div className='wrapper'>
      <section className={`${styles.titleTextSection} ${theme == 1 && styles.theme1}`}>
        {theme == 1 ? <h1>{title}</h1> : <h4>{title}</h4>}
        <p>{text}</p>
      </section>
    </div>
  );
};

export default TitleTextSection;
