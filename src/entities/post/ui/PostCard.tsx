import type { IPostCard } from '../../../types/types';

export default function PostCard( props : IPostCard) {
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
}
