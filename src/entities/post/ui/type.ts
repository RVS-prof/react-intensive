export interface IPostCard {
  post: IPost
  comments: IComment[]
}

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