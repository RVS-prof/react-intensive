import PostList from './PostList'
import withDataLoading from "../../shared/lib/hoc/WithLoading";
import usePosts from '../../features/PostList/model/hooks/usePosts';
import useComments from '../../features/PostList/model/hooks/useComments';

const PostListWithLoading = withDataLoading(PostList);

const PostLoading = () => {
  const { posts, isLoading } = usePosts();
  const { comments } = useComments();

  return (
    <PostListWithLoading
      isLoading={isLoading}
      posts={posts}
      comments={comments}
    />
  )
}

export default PostLoading