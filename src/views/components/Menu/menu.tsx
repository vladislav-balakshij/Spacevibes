import React from 'react';

import * as styles from './menu.module.scss';
import { GlobalContext } from '../../layouts/mainLayout';

const Menu = () => {
  const { state, setState } = React.useContext(GlobalContext);

  return (
    <div className={styles.overlay} onClick={() => {
      setState({...state, showMenu : !state.showMenu})
    }}>
      <div className={styles.menu}>
        menu
      </div>
    </div>
  )
}

export default Menu;