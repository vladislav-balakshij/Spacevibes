import React from 'react';
import Logo from '../../../assets/images/logo.svg'
import IconTwoLines from '../../../assets/icons/iconTwoLines.svg'

import * as styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <button className={styles.menuButton}>
        menu
        <IconTwoLines/>

      </button>
    </header>
  )
}

export default Header;