import React from 'react';
import Logo from '../../../assets/images/logo.svg';
import IconTwoLines from '../../../assets/icons/iconTwoLines.svg';

import * as styles from './header.module.scss';
import { GlobalContext } from '../../layouts/mainLayout';

const Header = () => {
  const { state, setState } = React.useContext(GlobalContext);

  console.log(state);
  return (
    <header className={styles.header}>
      <Logo />
      <button className={styles.menuButton} onClick={() => {
        setState({...state, showMenu : !state.showMenu})
      }}>
        menu
        <IconTwoLines />

      </button>
    </header>
  )
}

export default Header;