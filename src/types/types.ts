export interface IPost {
  id : number,
  title : string,
  body : string
}

export interface IPostCard {
  post : IPost
}