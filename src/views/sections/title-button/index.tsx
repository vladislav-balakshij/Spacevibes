import React from 'react';
import * as styles from './styles.module.scss';
import { Button } from "@elements";

const TitleButton = ({ title, url }: any) => {
    return (
      <div className='wrapper'>
        <section className={styles.titleButton}>
          <h1>{title}</h1>
          <Button>Next project</Button>
        </section>
      </div>
    );
  }
;

export default TitleButton;
