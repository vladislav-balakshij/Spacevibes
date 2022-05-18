import React from 'react';

import * as styles from './menu.module.scss';

import IconClose from '../../../assets/icons/iconClose.svg';
import IconDribble from '../../../assets/icons/iconDribble.svg';
import IconFacebook from '../../../assets/icons/iconFacebook.svg';
import IconInstagram from '../../../assets/icons/iconInstagram.svg';
import IconLinkedIn from '../../../assets/icons/iconLinkedIn.svg';
import IconTwitter from '../../../assets/icons/iconTwitter.svg';

import { GlobalContext } from '../../layouts/mainLayout';

const Menu = () => {
  const { state, setState } = React.useContext(GlobalContext);

  return (
    <div className={styles.overlay} onClick={() => {
      setState({ ...state, showMenu: !state.showMenu })
    }}>
      <div className={styles.menu}>
        <button>
          <IconClose />
        </button>
        <div>
          <a href="#">
            <IconDribble />
          </a>
          <a href="#">
            <IconFacebook />
          </a>
          <a href="#">
            <IconInstagram />
          </a>
          <a href="#">
            <IconLinkedIn />
          </a>
          <a href="#">
            <IconTwitter />
          </a>
        </div>
        <ul className={styles.list}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#">Approach</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div>
          Book a free consultation call
          Schedule a call
        </div>
      </div>
    </div>
  )
}

export default Menu;