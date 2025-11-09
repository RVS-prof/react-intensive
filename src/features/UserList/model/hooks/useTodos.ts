import { useMemo } from "react";
import { useGetToDoQuery } from "../../../../entities/entity/API/todoApi";

const useToDos = () => {
  const { 
    data : todos,
    isLoading
  } = useGetToDoQuery(
    {
      limit: 100,
      offset: 0
    }
  );

  const memoizedTodos = useMemo(() => todos || [], [todos]);
  
  return {
    todos : memoizedTodos,
    isLoading
  }
};

export default useToDos;