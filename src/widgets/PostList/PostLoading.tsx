import { useEffect, useState } from 'react'
import PostList from './PostList'
import withDataLoading from "../../shared/lib/hoc/WithLoading";

const PostListWithLoading = withDataLoading(PostList);

const PostLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <PostListWithLoading 
      isLoading={isLoading}
    />
  )
}

export default PostLoading