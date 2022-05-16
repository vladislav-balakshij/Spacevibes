import React from 'react';
import * as styles from './styles.module.scss'

const TwoColorsTitle = ({ first, second } : {first : string; second : string}) => {
  return <h3 className={styles.twoColorsTitle}>
    <div>{first}</div>
    {second}
  </h3>
}

export default TwoColorsTitle;