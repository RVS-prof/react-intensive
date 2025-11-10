import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../../../../entities/entity/API/postApi";
import { 
  selectAllPosts, 
  selectPostsStatus,
  selectPostsError 
} from "../../../../entities/entity/model/slice/postSlice";

const usePosts = () => {
  const { 
    data: apiPosts,
    isLoading: isApiLoading,
    error: apiError,
    refetch 
  } = useGetPostsQuery({ 
    limit: 100, 
    offset: 0 
  });

  const postsFromSlice = useSelector(selectAllPosts);
  const status = useSelector(selectPostsStatus);
  const error = useSelector(selectPostsError);

  useEffect(() => {}, [apiPosts]);

  const memoizedPosts = useMemo(() => {
    if (Array.isArray(postsFromSlice)) {
      return postsFromSlice;
    }
    console.warn('postsFromSlice is not an array:', postsFromSlice);
    return [];
  }, [postsFromSlice]); 
  
  const isLoading = isApiLoading || status === 'loading';
  const combinedError = apiError || error;

  return {
    posts: memoizedPosts,
    isLoading,
    error: combinedError,
    hasPosts: memoizedPosts.length > 0,
    postsCount: memoizedPosts.length,
    refetch
  };
};

export default usePosts;