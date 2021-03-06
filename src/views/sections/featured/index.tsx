import React from 'react';
import * as styles from './styles.module.scss';
import Button from "../../elements/buttons";

const FeaturedProjectsSection = ({ projects }: any) => {
  return (
    <div className={styles.FeaturedProjectsSection}>
      <div className='wrapper'>
        <h3 className={styles.title}>
          <div>featured</div>
          projects
        </h3>
        <div className={styles.content}>
          <section className={styles.projectsList}>
            {projects.map((project: any) => {
              return (<article className={styles.project}>
                <img src="https://via.placeholder.com/550x780/0000FF/808080%20?Text=Digital.com" />
                <h5>{project.name}</h5>
                <h4>{project.title}</h4>
                <p>{project.keywords}</p>
              </article>)
            })}
          </section>
          <section className={styles.imageWrapper}>
            <div className={styles.images}>
              <img src="https://via.placeholder.com/550x780/0000FF/808080%20?Text=Digital.com" />
            </div>
          </section>
        </div>
        <Button>View all projects</Button>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
