import type { IPost } from "../../../widgets/PostList/type";

export interface WithLoadingProps {
  isLoading: boolean;
  posts: IPost[]
}