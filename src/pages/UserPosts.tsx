import { useParams } from "react-router";
import style from "./UserStyle.module.css"
import usePosts from "../features/PostList/model/hooks/usePosts";
import type { IAPIEntity } from "../entities/type";
import useComments from "../features/PostList/model/hooks/useComments";
import PostCard from "../entities/post/ui/PostCard";

export const UserPosts = () => {
  const { posts } = usePosts();
  const { comments } = useComments();
  const searchParams = useParams();
  const userId = searchParams.id

  const filteredPosts = posts
    .filter(element => 
      element.postId == userId)

  const filteredComments = (id : number) => 
      comments.filter(element => 
        element.postId === id)

  return (
    <section className={style.flexBox}>
      {filteredPosts.map((post:IAPIEntity) => (
        <PostCard
          key={post.id}
          post={post}
          comments={filteredComments(post.id)}
        />
      ))}
    </section>
  )
}
