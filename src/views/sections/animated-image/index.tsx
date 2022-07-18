import React from 'react';
import * as styles from './styles.module.scss';

const AnimatedImageSection = ({ title, background, gif }: any) => {
    return (
      <div className='wrapper'>
        <section className={styles.animatedImageSection}>
          <h1>Any mechanical keyboard enthusiasts in design.</h1>
          <div style={{ backgroundImage: `url(${background})` }} className={styles.background}><img src={gif} alt="" />
          </div>
        </section>
      </div>
    );
  }
;

export default AnimatedImageSection;
