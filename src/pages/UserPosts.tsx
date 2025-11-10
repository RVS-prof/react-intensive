import { useParams } from "react-router";
import style from "./UserStyle.module.css"
import usePosts from "../features/PostList/model/hooks/usePosts";
import useComments from "../features/PostList/model/hooks/useComments";
import PostCard from "../entities/post/ui/PostCard";
import type { Post } from "../entities/entity/model/type";
import { filterByField } from "../shared/ui/ItemList/ItemList";
import Loader from "../shared/ui/loader/loader";

export const UserPosts = () => {
  const { posts, isLoading } = usePosts();
  const { comments } = useComments();
  const searchParams = useParams();
  const userId = Number(searchParams['id'])
  const filteredPosts = filterByField(posts, 'userId', userId);
  const filteredComments = (id : number) => filterByField(comments, 'postId', id);
  
  const getUserPosts = () =>
    <section className={style['mainForm__cards']}>
        {filteredPosts.map((post:Post) => (
        <PostCard
          key={post.id}
          post={post}
          comments={filteredComments(post.id)}
        />
      ))}
    </section>

  return (
    <section className={style['flexBox']}>
      <Loader isLoading={isLoading} thirdPartyFunction={getUserPosts}/>
    </section>
  )
}