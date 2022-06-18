import React from 'react';
import { PencilLine } from "phosphor-react";

import { Avatar } from '../Avatar';

import coverImage from '../../assets/cover.png';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside>
      <img className={styles.cover} src={coverImage} alt="Imagem de Capa" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/mchjohn.png" />

        <strong>Michel John</strong>
        <span>AM 2</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}