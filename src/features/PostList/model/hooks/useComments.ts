import { useMemo } from "react";
import { useGetCommentsQuery } from "../../../../entities/entity/API/commentApi";

const useComments = () => {
  const { 
    data : comments,
    isLoading
  } = useGetCommentsQuery(
    { 
      limit: 25, 
      offset: 0
    }
  );

  const memoizedComments = useMemo(() => comments || [], [comments]);
  
  return {
    comments : memoizedComments,
    isLoading
  }
};

export default useComments;