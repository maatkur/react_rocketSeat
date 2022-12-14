import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const [comments, setComment] = useState([
        'Post muito bacana, hein?'
    ])

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", { locale: ptBR })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })


    function newComment() {
        event.preventDefault()

        const newCommentText = event.target.comment.value
        setComment([...comments, newCommentText])

        console.log(event.target.comment.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title='9 de Novembro às 14:55' dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={newComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                    name='comment'
                />
                <footer>
                    <button type='submit' onClick={newComment}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>
        </article>
    )
}