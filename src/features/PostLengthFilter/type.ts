import type { IAPIEntity } from "../../entities/type";

export interface ISetterByLength {
  lengthL: IByLength
  setLength: React.Dispatch<React.SetStateAction<IByLength>>;
}

export interface IPostLengthFilter {
  posts: IAPIEntity[],
  headerLength: IByLength
}

export interface IPost {
  id : number;
  title : string;
  body : string;
}

export type IByLength = "long" | "short" | "default"