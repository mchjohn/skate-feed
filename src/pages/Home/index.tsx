import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { Sidebar } from '../../components/Sidebar';

import { posts } from '../../utils/posts';

import styles from './Home.module.css';

export function Home() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

      <div>
        {posts.map((post) =>
          <Post
            key={post.id}
            author={post.author}
            comment={post.comment}
            publishedAt={post.publishedAt} />)}
      </div>
      </div>
    </>
  )
}