import PostCard from "../../entities/post/ui/PostCard";
import style from './PostList.module.css'
import type { IByLength, IComment, IPost } from "../../app/types/types";
import PostLengthFilter from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { useCallback, useEffect, useMemo, useState } from "react";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
import usePosts from "../../features/PostList/model/hooks/usePosts";


function PostList() {
  const [headerLength, setHeaderLength] = useState<IByLength>('default')
  const [newPosts, setNewPosts] = useState<IPost[]>([])
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
  const commentList : IComment[] = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 2,
    "id": 6,
    "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
    "email": "Presley.Mueller@myrl.com",
    "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  },
  {
    "postId": 2,
    "id": 7,
    "name": "repellat consequatur praesentium vel minus molestias voluptatum",
    "email": "Dallas@ole.me",
    "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
  },
  {
    "postId": 3,
    "id": 11,
    "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
    "email": "Veronica_Goodwin@timmothy.net",
    "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
  },
  {
    "postId": 3,
    "id": 12,
    "name": "modi ut eos dolores illum nam dolor",
    "email": "Oswald.Vandervort@leanne.org",
    "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
  },
  {
    "postId": 3,
    "id": 13,
    "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
    "email": "Kariane@jadyn.tv",
    "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
  },
  {
    "postId": 3,
    "id": 14,
    "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
    "email": "Nathan@solon.io",
    "body": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
  },
  {
    "postId": 3,
    "id": 15,
    "name": "debitis magnam hic odit aut ullam nostrum tenetur",
    "email": "Maynard.Hodkiewicz@roberta.com",
    "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
  }
  ]
  const filteredComments = useCallback(
   (id : number) => 
      commentList.filter(element => 
        element.postId === id)
  ,[newPosts])
        console.log(usePosts);
        
  

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
        {newPosts.map((post:IPost) => (
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