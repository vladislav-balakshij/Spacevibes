import React from 'react';
import * as styles from './styles.module.scss'
import Button from "../../elements/buttons";

const PostsSection = ({
                        title,
                        description,
                        posts,
                        link
                      }: { title?: string, description?: string, posts: { url: string | undefined; title: string }[], link?: string }) => {
  return (
    <section className={styles.postsSection}>
      <div className='wrapper'>
        <div className={styles.posts}>
          {posts.map((post) => {
            return <article className={styles.post}>
              <img src="https://via.placeholder.com/400x240/0000FF/808080%20?Text=Digital.com" />
              <a href={post.url} target="_blank">{post.title}</a>
            </article>
          })}
        </div>
      </div>
      {link && <div className="wrapper">
          <Button>View all resources</Button>
      </div>}

    </section>

  );
};

export default PostsSection;
