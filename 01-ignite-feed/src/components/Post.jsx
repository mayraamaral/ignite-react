import styles from './Post.module.css'

export const Post = (props) => {
  return (
    <div>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img 
              className={styles.avatar}
              src="https://github.com/mayraamaral.png" />
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
      </article>
    </div>
  )
}