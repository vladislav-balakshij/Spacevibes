import React from 'react';
import * as styles from './styles.module.scss'
import { Filter } from '@elements';
import { Project } from '@components';

const ProjectsSection = ({ projects, filter }: { projects?: any, filter?: boolean }) => {
  return (
    <div className={'wrapper'}>
      <section className={styles.projectsSection}>
        {filter && <Filter />}
        <div className={styles.projectsList}>
          <div className={styles.column}>
            <Project />
            <Project />
          </div>
          <div className={styles.column}>
            <Project />
            <Project />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
