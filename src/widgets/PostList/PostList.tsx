import PostCard from "../../entities/post/ui/PostCard";
import style from './PostList.module.css'
import type { IByLength, IPostList } from "./type";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { useCallback, useEffect, useMemo, useState } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import type { Post } from "../../entities/entity/model/type";

const  PostList : React.FC<IPostList> = ({posts, comments}) => {
  const [headerLength, setHeaderLength] = useState<IByLength>('default')
  const [newPosts, setNewPosts] = useState<Post[]>([])

  const filteredComments = useCallback(
   (id : number) => 
      comments.filter(element =>
        element.postId === id)
  ,[newPosts])

  const filteredPosts = useMemo(() =>
    filterByLength({posts, headerLength})
  , [posts, headerLength])

  useEffect(()=>{
    setNewPosts(filteredPosts)
  },[headerLength])

  return (
    <section className={style.mainForm}>
      <header className={style.mainForm__header}>
        <h1>
          Post List
        </h1>
      </header>
      <section className={style.mainForm__selectList}>
        <PostLengthFilter lengthL = {headerLength} setLength = {setHeaderLength}/>
      </section>
      <section className={style.mainForm__cards}>
        {newPosts.map((post : Post) => (
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

export default PostList