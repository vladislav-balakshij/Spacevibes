import React from 'react';
import * as styles from './styles.module.scss'
import { Filter } from '@elements';
import { Project } from '@components';

const HeroSection = ({ projects }: { projects?: any }) => {
  return (
    <div className={'wrapper'}>
      <section className={styles.projectsSection}>
        <Filter />
        <div className={styles.projectsList}>
          <div>
            <Project />
            <Project />
          </div>
          <div>
            <Project />
            <Project />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
