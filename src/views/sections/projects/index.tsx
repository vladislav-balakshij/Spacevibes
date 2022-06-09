import React from 'react';
import * as styles from './styles.module.scss'
import { Filter, Project } from '@elements';

const HeroSection = ({ projects }: { projects?: any }) => {
  return (
    <div className={'wrapper'}>
      <section className={styles.projectsSection}>
        <Filter />
        <div>
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
