import type { IPostCard } from '../../../types/types';


const PostCard : React.FC<IPostCard> = ( props ) => {
  return (
    <section>
      <header>
        <h2>
          {props.post.title}
        </h2>
      </header>
      <div>
        <p>
          {props.post.body}
        </p>
      </div>
    </section>
  )
};

export default PostCard