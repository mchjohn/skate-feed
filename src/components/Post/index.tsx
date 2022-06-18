import { ChangeEvent, FormEvent, useState } from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './Post.module.css';

type Comment = {
  type: 'paragraph' | 'link',
  content: string
}

interface IPost {
  author: {
    role: string,
    name: string,
    avatar_url: string
  };
  publishedAt: Date;
  comment: Comment[];
}

export function Post({ author, publishedAt, comment }: IPost) {
  const [comments, setComments] = useState(['Skate4Ever']);
  const [newTextComment, setNewTextComment] = useState('');

  const publishedAtFormatted =
    format(publishedAt,
      "dd 'de' MMMM 'às' HH:mm'h'",
      { locale: ptBR }
    );

  const publishedThere = formatDistanceToNow(publishedAt,
    { locale: ptBR, addSuffix: true });

  const handleNewCommentText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTextComment(event.target.value);
  }

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    
    setComments([...comments, newTextComment]);

    setNewTextComment('');
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleted = comments.filter(comment => comment !== commentToDelete);

    setComments(commentsWithoutDeleted);
  }

  return (
    <article className={styles.container}>
      <header>
        <div className={styles.user_info}>
          <Avatar src={author.avatar_url} />
          
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedAtFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedThere}
        </time>
      </header>

      <div className={styles.content}>
        {comment.map(({ type, content}) => {
          return (type === 'paragraph'
            ? <p key={content}>{content}</p>
            : <p key={content}><a href='#'>{content}</a></p>
          )
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comments}>
        <strong>Deixe seu feedback</strong>

        <textarea
          required
          value={newTextComment}
          onChange={handleNewCommentText}
          placeholder='Escreva um comentário...' />

        <footer>
          <button disabled={!newTextComment} type='submit'>Publicar</button>
        </footer>
      </form>

      {comments.map((comment) => (
        <Comment
          key={comment}
          content={comment}
          onDeleteComment={deleteComment} />
      ))}
    </article>
  )
}