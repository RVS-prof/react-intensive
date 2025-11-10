import { useParams } from "react-router";
import style from "./UserStyle.module.css"
import usePosts from "../features/PostList/model/hooks/usePosts";
import useComments from "../features/PostList/model/hooks/useComments";
import PostCard from "../entities/post/ui/PostCard";
import type { Post } from "../entities/entity/model/type";

export const UserPosts = () => {
  const { posts } = usePosts();
  const { comments } = useComments();
  const searchParams = useParams();
  const userId = Number(searchParams['id'])

  const filteredPosts = posts
    .filter(element => 
      element.userId === userId)

  const filteredComments = (id : number) => 
      comments.filter(element => 
        element.postId === id)
  
  return (
    <section className={style['flexBox']}>
      <section className={style['mainForm__cards']}>
        {filteredPosts.map((post:Post) => (
        <PostCard
          key={post.id}
          post={post}
          comments={filteredComments(post.id)}
        />
      ))}
      </section>
    </section>
  )
}
