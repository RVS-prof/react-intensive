export type InewAPIEntity = Post | User | Comment | Album | Photo | Todo

export type Post = {
  userId : number;
  id : number;
  title : string;
  body : string;
}

export type User = {
  id : number;
  name : string;
  email : string;
  password : string;
}

export type Comment = {
  userId : number;
  name : string;
  email : string;
  body : string;
}

export type Album = {
  userId : number;
  id : number;
  title : string;
}

export type Photo = {
  userId : number;
  id : number;
  img : string;
}

export type Todo = {
  userId : number;
  id : number;
  title : string;
  completed : boolean;
}

