import type { Comment, Post } from "../../entities/entity/model/type";

export interface IComment {
  postId: number
  id: number,
  name: string,
  email: string,
  body: string
}

export type IByLength = "long" | "short" | "default"

export interface IPostList {
  posts: Post[];
  comments: Comment[]
}

