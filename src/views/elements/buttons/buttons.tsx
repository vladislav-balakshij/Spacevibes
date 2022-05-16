import React from 'react';
import * as styles from './buttons.module.scss'
import IconBlackArrow from '../../../assets/icons/iconBlackArrow.svg'

const Button = ({ children }) => {
  return <button className={styles.button}>
    {children}
    <IconBlackArrow />
  </button>
}

export default Button;