import React, { useContext } from 'react';

import * as styles from './styles.module.scss';

import { Logo } from '@images';
import { IconTwoLines } from '@icons';
import { GlobalContext } from "../../../states";
import { Link } from "gatsby";

const Header = () => {
  const { state, setState }: any = useContext(GlobalContext);

  return (
    <header className={styles.header}>
      <Link to='/'>
        <Logo />
      </Link>
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