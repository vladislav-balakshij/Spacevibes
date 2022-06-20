import React from 'react';
import * as styles from './styles.module.scss';
import { Button } from "@elements";

const TitleButton = ({ title, url, theme }: any) => {
    return (
      <div className='wrapper'>
        <section className={`${styles.titleButton} ${theme && styles.theme1}`}>
          {(theme) ? <h4>{title}</h4> : <h1>{title}</h1>}
          <Button>Next project</Button>
        </section>
      </div>
    );
  }
;

export default TitleButton;
