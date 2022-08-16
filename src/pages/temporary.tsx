import React, { useContext, useState } from 'react';
import { Button } from "@elements";
import { Logo } from "@images";
import * as styles from '../styles/tmp/temporary.module.scss';
import { IconClose, IconTwoLines } from "@icons";

const Page = () => {
  const [menu, showMenu] = useState(false);
  console.log(menu);
  return (
    <>
      {menu && <div className={styles.overlay}>
          <div className={styles.menu}>
              <button className={styles.closeButton} onClick={() => {
                showMenu(!menu)
              }}>
                  <IconClose />
              </button>
              <div className={styles.grid}>
                  <div>
                      <label htmlFor="">email me:</label>
                      <a href="mailto:hello@spacevibes.com">hello@spacevibes.com</a>
                  </div>
                  <div>
                      <label htmlFor="">Book a free consultation call</label>
                      <a href="https://calendly.com/vladislav-balakshij/test">Schedule a call</a>
                  </div>
              </div>
          </div>
      </div>}
      <div className={`wrapper ${styles.temporary}`}>


        <div className={styles.content}>
          <h1>Hello.
            I’m Sirus.</h1>
          <p>I am a digital product designer living in Toronto. I work with financial institutions, government
            ministries,
            and the health industry to design applications, websites and better user experiences.</p>
          <div onClick={() => {
            showMenu(!menu)
          }}><Button>Get in touch</Button></div>

        </div>

        <div className={styles.footer}>
          <Logo />
          <p>©2022</p>
        </div>
      </div>
    </>

  );
}

export default Page;