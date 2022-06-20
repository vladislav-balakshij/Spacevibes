import React from 'react';
import * as styles from './styles.module.scss';

const TitleImagesGridSection = ({ title, images }: any) => {
  return (
    <div className='wrapper'>
      <section className={styles.titleImagesGridSection}>
        <h1>{title}</h1>
        <div className={styles.grid}>
          <article>
            <img src="https://via.placeholder.com/365x150/0000FF/808080%20?Text=Digital.com" alt="" />
          </article>
          <article>
            <img src="https://via.placeholder.com/365x150/0000FF/808080%20?Text=Digital.com" alt="" />
          </article>
          <article>
            <img src="https://via.placeholder.com/365x150/0000FF/808080%20?Text=Digital.com" alt="" />
          </article>
          <article>
            <img src="https://via.placeholder.com/365x150/0000FF/808080%20?Text=Digital.com" alt="" />
          </article>
          <article>
            <img src="https://via.placeholder.com/365x150/0000FF/808080%20?Text=Digital.com" alt="" />
          </article>
          <article>
            <img src="https://via.placeholder.com/365x150/0000FF/808080%20?Text=Digital.com" alt="" />
          </article>
        </div>
      </section>
    </div>
  );
};

export default TitleImagesGridSection;
