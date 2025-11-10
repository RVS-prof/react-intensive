import { createBrowserRouter } from "react-router";
import { Main } from "../../../pages/Main";
import { User } from "../../../pages/User";
import { UserPosts } from "../../../pages/UserPosts";
import { UserToDos } from "../../../pages/UserToDos";
import { UserAlbum } from "../../../pages/UserAlbum";
import { AlbumPhotos } from "../../../pages/AlbumPhotos";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      { path: "/posts/:id" } 
    ]
  },
  { path: "/user/:id", Component: User,
    children: [
      { 
        path: "/user/:id/posts", 
        index: true, 
        Component: UserPosts 
      },
      { 
        path: "/user/:id/todos", 
        Component: UserToDos 
      },
      { 
        path: "/user/:id/albums", 
        Component: UserAlbum ,
        children: [
          {path: "albums/:id/photos", Component: AlbumPhotos}
        ]}
    ],
  },
]);
