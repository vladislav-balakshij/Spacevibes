import React from 'react';
import * as styles from './styles.module.scss'

const Select = ({ items }: any) => {
  return <select className={styles.select}>
    <option value="one">One</option>
    <option value="one">Two</option>
    <option value="one">Three</option>
  </select>
}

export default Select;