import type { IAPIEntity } from "../../../entities/type";

export interface WithLoadingProps {
  isLoading: boolean;
  posts: IAPIEntity[]
}