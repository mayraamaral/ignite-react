import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export const Post = (props) => {
  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src="https://github.com/mayraamaral.png" />
              <div className={styles.authorInfo}>
                <strong>Mayra Amaral</strong>
                <span>Developer</span>
              </div>
          </div>
          <time title="30 de julho às 23h22" dateTime="2022-07-30 23:22:00">Publicado há 1h</time>
        </header>
        <div className={styles.content}>
          <p>Fala galera</p>

          <p>Acabei de subir mais um projeto no meu portfolio.</p>
          <p><a href="#">mayraamaral.me</a></p>
          <p><a href="#">#novoprojeto #portfilio</a></p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu comentário</strong>
          <textarea placeholder='Deixe um comentário'></textarea>
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </div>
  )
}