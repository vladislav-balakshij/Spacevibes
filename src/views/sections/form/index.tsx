import React from 'react';
import * as styles from './styles.module.scss';

const FormSection = ({ title, elements }: any) => {
  return (
    <section className={styles.wideImageSection}>
      <div className="wrapper">
        {title && <p>{title}</p>}
        <form action="" method='post'>
          {elements}
        </form>
      </div>
    </section>
  );
};

export default FormSection;
