import { useMemo } from "react";
import { useGetPostsQuery } from "../../../API/apislice";

const usePosts = () => {
  const { 
    data : posts,
    isLoading
  } = useGetPostsQuery(
    { 
      limit: 5, 
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