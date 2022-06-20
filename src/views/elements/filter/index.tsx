import React from 'react';
import { IconBlackArrowDown } from "@icons";
import * as styles from './styles.module.scss'

const Filter = ({ callback }: { callback?: any }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.label}>Filter</div>
      <div className={styles.title}>
        <h3>All projects</h3>
        <button><IconBlackArrowDown /></button>
      </div>
    </div>
  );
};

export default Filter;
