import React from 'react';
import * as styles from './styles.module.scss';

const Project = ({ project }: { project?: any }) => {
  return (
    <article className={styles.project}>
      <img  src="https://via.placeholder.com/550x400/0000FF/808080%20?Text=Digital.com" />
      <a href="/project" className={styles.title}><strong>Pharmacuetical app</strong> - an enterprise application design for McKesson Canada</a>
    </article>
  );
};

export default Project;
