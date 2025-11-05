import type { ICommentList } from "../../../app/types/types"
import style from './CommentList.module.css'

const CommentList = ( props : ICommentList ) => {

  return (
    <section className={style.comment}>
      <h2>Комментарий написал: {'\n' + props.comment.name}</h2>
      <h4>{props.comment.email}</h4>  
      <h3>{props.comment.body}</h3>
    </section>  
  )
}

export default CommentList