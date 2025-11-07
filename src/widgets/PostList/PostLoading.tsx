import PostList from './PostList'
import withDataLoading from "../../shared/lib/hoc/WithLoading";
import usePosts from '../../features/PostList/model/hooks/usePosts';

const PostListWithLoading = withDataLoading(PostList);

const PostLoading = () => {
  const { posts, isLoading } = usePosts();

  return (
    <PostListWithLoading
      isLoading={isLoading}
      posts={posts}
    />
  )
}

export default PostLoading