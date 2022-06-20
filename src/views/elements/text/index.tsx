import React from 'react';
import * as styles from './styles.module.scss'

const Text = ({text} : any) => {
  return <p className={styles.text}>
    {text}
  </p>
}

export default Text;