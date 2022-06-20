import React from 'react';
import * as styles from './styles.module.scss'

const ListItem = ({ title, text, image }: { title: string, text: string, image: string }) => {
  return <article className={styles.listItem}>
    <div>
      <h4>The user is always our first priority</h4>
      <p>Before building anything, we work to understand the who, what, and why. Who are we building for? What is the
        problem we’re solving? And why is this the solution they need? Having answers to these questions early in the
        process allows us to build products that enhance capabilities, bring happiness, and simplify process.</p>
    </div>
    <img src='https://via.placeholder.com/430x410/0000FF/808080%20?Text=Digital.com' alt="" />
  </article>
}

export default ListItem;