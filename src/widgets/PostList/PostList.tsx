import PostCard from "../../entities/post/ui/PostCard";
import style from './PostList.module.css'

export default function PostList() {


  return (
    <section className={style.mainForm}>
      <header className={style.mainForm__header}>
        <h1>
          Post List
        </h1>
      </header>
      <section className={style.mainForm__cards}>
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </section>
  )
}
