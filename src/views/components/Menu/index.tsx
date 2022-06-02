import React, { useContext } from 'react';
import * as styles from './styles.module.scss';
import { IconClose, IconDribble, IconFacebook, IconInstagram, IconLinkedIn, IconTwitter } from '@icons';
import { GlobalContext } from "../../../states";


const Menu = () => {
  const { state, setState }: any = useContext(GlobalContext);

  return (
    state.showMenu &&
    <div className={styles.overlay}>
        <div className={styles.menu} onClick={() => {
          setState({ ...state, showMenu: !state.showMenu })
        }}>
            <button className={styles.closeButton}>
                <IconClose />
            </button>
            <div className={styles.grid}>

                <div className={styles.networks}>
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
                <div className={styles.footer}>
                    Book a free consultation call
                    <a href="#">Schedule a call</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu;