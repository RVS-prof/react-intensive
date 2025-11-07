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