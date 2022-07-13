import React from 'react';
import * as styles from './styles.module.scss'

const Overline = ({ children }: { children: any }) => {
  return <p className={styles.overline}>{children}</p>
}

export default Overline;