import React from 'react';
import { GlobalContext } from '../../layouts/mainLayout';

import * as styles from './styles.module.scss';

import { Logo } from '@images';
import { IconTwoLines } from '@icons';

const Header = () => {
  const { state, setState } = React.useContext(GlobalContext);

  return (
    <header className={styles.header}>
      <Logo />
      <button className={styles.menuButton} onClick={() => {
        setState({ ...state, showMenu: !state.showMenu })
      }}>
        menu
        <IconTwoLines />
      </button>
    </header>
  )
}

export default Header;