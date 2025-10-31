import type { IComment } from "../../../types/types"

const CommentList = ( props : IComment) => {

  return (
    <div>
      <h2>Комментарий написал: {'\n' + props.name}</h2>
      <h4>{props.email}</h4>  
      <h3>{props.body}</h3>
    </div>
  )
}

export default CommentList