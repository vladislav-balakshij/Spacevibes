import React from 'react';
import * as styles from './styles.module.scss'

const Tags = ({tags} : any) => {
  return <nav className={styles.tags}>
    <a href="#">Javascript</a>
    <a href="#">Front-end development</a>
    <a href="#">Frameworks</a>
  </nav>
}

export default Tags;