import type { Post } from "../../../entities/entity/model/type";

export interface WithLoadingProps {
  isLoading: boolean;
  posts: Post[]
}