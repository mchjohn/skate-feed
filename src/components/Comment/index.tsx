import { useState } from 'react';
import { Trash, ThumbsUp } from "phosphor-react";

import { Avatar } from "../Avatar";

import styles from './Comment.module.css';

type CommentProps  = {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [countLike, setCountLike] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  }

  const handleCountLike = () => {
    setCountLike(prevState => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/mchjohn.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Michel John <span>(você)</span></strong>
              <time title='11 de junho às 08:00h' dateTime='2022-06-11 08:00:00'>Cerca de 2h</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário"><Trash size={24} /></button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleCountLike}>
            <ThumbsUp size={20} />
            Aplaudir <span>{countLike}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}