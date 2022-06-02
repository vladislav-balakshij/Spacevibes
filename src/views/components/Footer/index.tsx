import React from 'react';
import { IconWhiteArrow } from '@icons'
import * as styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2>Let's make something great together</h2>
        <ul className={styles.nav}>
          <li>
            <a href="#">
              Drop a line
              <IconWhiteArrow />
            </a>
          </li>
          <li>
            <a href="#">
              Book a call
              <IconWhiteArrow />
            </a>
          </li>
          <li>
            <a href="#">
              Start a project
              <IconWhiteArrow />
            </a>
          </li>
        </ul>

        <div className={styles.copy}>&copy; Spacevibes Inc 2022</div>
      </div>
    </footer>
  )
}

export default Footer;