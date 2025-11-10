import type { Post } from "../../entities/entity/model/type";

export interface ISetterByLength {
  lengthL: IByLength
  setLength: React.Dispatch<React.SetStateAction<IByLength>>;
}

export interface IPostLengthFilter {
  posts: Post[],
  headerLength: IByLength
}

export type IByLength = "long" | "short" | "default"