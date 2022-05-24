import React from 'react';
import * as styles from './styles.module.scss';
import Button from "../../elements/buttons/buttons";

const FeaturedProjectsSection = () => {
  return (
    <div className='wrapper'>
      <div className={styles.FeaturedProjectsSection}>
        <header>
          <h3 className={styles.title}>
            <div>featured</div>
            projects
          </h3>
        </header>

        <section className={styles.projectList}>
          <article className={styles.project}>
            <h5>Mckesson Canada</h5>
            <h4>Canada’s leading pharmaceutical brand</h4>
            <p>web application, user interface, design, ux</p>
          </article>

          <article className={styles.project}>
            <h5>Mckesson Canada</h5>
            <h4>Canada’s leading pharmaceutical brand</h4>
            <p>web application, user interface, design, ux</p>
          </article>

          <article className={styles.project}>
            <h5>Mckesson Canada</h5>
            <h4>Canada’s leading pharmaceutical brand</h4>
            <p>web application, user interface, design, ux</p>
          </article>
        </section>
        <section className={styles.images}>
          <div className={styles.imageWrapper}>
            <img src="https://via.placeholder.com/550x780/0000FF/808080%20?Text=Digital.com" />
          </div>

        </section>

        <footer>
          <Button>View all projects</Button>
        </footer>

      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
