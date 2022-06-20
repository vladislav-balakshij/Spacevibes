import React from 'react';
import * as styles from './styles.module.scss';

const FixedContentImages = ({ title, text, reverse }: any) => {
  return (
    <div className='wrapper'>
      <section className={`${styles.fixedContentImages} ${reverse && styles.reverse}`}>
        <article className={styles.content}>
          <h4>{title}</h4>
          <p>{text}</p>
        </article>
        <div className={styles.images}>
          <img src="https://via.placeholder.com/992x675/0000FF/808080%20?Text=Digital.com'" alt="" />
          <img src="https://via.placeholder.com/992x675/0000FF/808080%20?Text=Digital.com'" alt="" />
          <img src="https://via.placeholder.com/992x675/0000FF/808080%20?Text=Digital.com'" alt="" />
        </div>
      </section>
    </div>
  );
};

export default FixedContentImages;
