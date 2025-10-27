import PostCard from "../../entities/post/ui/PostCard";
import style from './PostList.module.css'
import type { IPost } from "../../types/types";

export default function PostList() {
  const posts : IPost[] = [
    {
      id: 1,
      title: 'id labore ex et quam laborum',
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      id: 2,
      title: "quo vero reiciendis velit similique earum",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
    id: 3,
    title: "odio adipisci rerum aut animi",
    body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    }
  ];

  return (
    <section className={style.mainForm}>
      <header className={style.mainForm__header}>
        <h1>
          Post List
        </h1>
      </header>
      <section className={style.mainForm__cards}>
        {posts.map((post:IPost) => (
          <PostCard 
            key={post.id}
            post={post}
          />
        ))}
      </section>
    </section>
  )
}
