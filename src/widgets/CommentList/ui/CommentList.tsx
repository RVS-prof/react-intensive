import type { ICommentList } from "../../type"
import style from './CommentList.module.css'

const CommentList = ( props : ICommentList ) => {

  return (
    <section className={style.comment}>
      <h2>{props.comment.name}</h2>  
      <h3>{props.comment.body}</h3>
      <h3>Комментарий написал: {props.comment.email}</h3>
    </section>  
  )
}

export default CommentList