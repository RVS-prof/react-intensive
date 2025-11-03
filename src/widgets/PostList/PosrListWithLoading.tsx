import withDataLoading from "../../shared/lib/hoc/WithLoading";
import PostList from "./PostList";


// Простой вариант
export const PostListWithLoading = withDataLoading(PostList);

