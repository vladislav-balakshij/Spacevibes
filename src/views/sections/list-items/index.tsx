import React from 'react';
import * as styles from './styles.module.scss';
import { ListItem } from "@elements";

const ListItemsSection = ({ title, items }: { title: string, items: any }) => {
  return (
    <div className='wrapper'>

      <section className={styles.listItemsSection}>
        <h1>{title}</h1>
        <div>
          {items.map(item => (<ListItem {...item} />))}
        </div>
      </section>
    </div>
  );
};

export default ListItemsSection;
