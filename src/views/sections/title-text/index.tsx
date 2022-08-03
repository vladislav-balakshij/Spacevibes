import React from 'react';
import * as styles from './styles.module.scss';

const TitleTextSection = ({ title, text, theme, children }: any) => {

  const genClassName = () => {
    if (theme == 2) {
      return `${styles.titleTextSection} ${styles.secondTemplate}`;
    }
    return styles.titleTextSection;
  }

  return (
    <div className='wrapper'>
      <section className={genClassName()}>
        <h4>{title}</h4>
        <p>{text}</p>
        {children}
      </section>
    </div>
  );
};

export default TitleTextSection;
