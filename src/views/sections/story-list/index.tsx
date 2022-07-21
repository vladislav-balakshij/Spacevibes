import React from 'react';
import * as styles from './styles.module.scss';

const StoryListSection = ({ storyList }: any) => {
  return (
    <div className='wrapper'>
      <div className={styles.StoryListSection}>
        <h3>What I do</h3>
        <div className={styles.content}>
          <section className={styles.storyList}>
            {storyList.map((storyPoint: any) => {
              return (<article className={styles.storyPoint}>
                <h4>{storyPoint.title}</h4>
                <p>{storyPoint.text}</p>
                <img src="https://via.placeholder.com/550x780/0000FF/808080%20?Text=Digital.com" />
              </article>)
            })}
          </section>
          {/*<section className={styles.images}>*/}
          {/*  <div className={styles.imageWrapper}>*/}
          {/*    <img src="https://via.placeholder.com/550x780/0000FF/808080%20?Text=Digital.com" />*/}
          {/*  </div>*/}
          {/*</section>*/}
        </div>
      </div>
    </div>
  );
};

export default StoryListSection;
