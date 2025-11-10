import type { Comment, Post } from "./entity/model/type";

export interface IPostCard {
  post: Post
  comments: Comment[]
}

export interface IComment {
  postId: number
  id: number,
  name: string,
  email: string,
  body: string
}

export interface IAPIEntity {
  userId? : number;
  postId? : number;
  id : number;
  title? : string;
  body? : string;
  completed? : boolean;
  name? : string;
  email? : string;
}