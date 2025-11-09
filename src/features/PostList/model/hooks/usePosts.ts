import { useMemo } from "react";
import { useGetPostsQuery } from "../../../../entities/entity/API/postApi";


const usePosts = () => {
  const { 
    data : posts,
    isLoading
  } = useGetPostsQuery(
    { 
      limit: 100, 
      offset: 0
    }
  );

  const memoizedPosts = useMemo(() => posts || [], [posts]);
  
  return {
    posts : memoizedPosts,
    isLoading
  }
};

export default usePosts;