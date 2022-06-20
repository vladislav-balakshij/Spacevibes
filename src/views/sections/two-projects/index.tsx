import React from 'react';
import * as styles from './styles.module.scss'
import { Project } from '@components';

const TwoProjectsSection = ({ projects }: { projects?: any }) => {
  return (
    <div className={'wrapper'}>
      <section className={styles.projectsSection}>
        <div className={styles.projectsList}>
          <div>
            <Project />
          </div>
          <div>
            <Project />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TwoProjectsSection;
