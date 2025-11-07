export interface IComment {
  postId: number
  id: number,
  name: string,
  email: string,
  body: string
}

export interface IPost {
  id : number;
  title : string;
  body : string;
}

export type IByLength = "long" | "short" | "default"

export interface IPostList {
  posts: IPost[];
}

