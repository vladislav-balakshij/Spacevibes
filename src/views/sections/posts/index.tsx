import React from 'react';
import * as styles from './styles.module.scss'
import Button from "../../elements/buttons/buttons";

const PostsSection = ({ title, description, posts }: any) => {
  return (

    <section className={styles.postsSection}>
      <div className={'wrapper'}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.posts}>
        <div className='wrapper'>
          {posts.map(post => {
            return <article className={styles.post}>
              <img src="https://via.placeholder.com/400x240/0000FF/808080%20?Text=Digital.com" />

              <a href={post.url} target="_blank">{post.title}</a>
            </article>
          })}
        </div>
      </div>
      <div className="wrapper">
        <Button>View all resources</Button>
      </div>
    </section>

  );
};

export default PostsSection;
