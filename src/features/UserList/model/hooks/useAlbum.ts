import { useMemo } from "react";
import { useGetAlbumQuery } from "../../../../entities/entity/API/albumApi";

const useAlbum = () => {
  const { 
    data : album,
    isLoading
  } = useGetAlbumQuery(
    {
      limit: 100,
      offset: 0
    }
  );

  const memoizedAlbum = useMemo(() => album || [], [album]);
  
  return {
    album : memoizedAlbum,
    isLoading
  }
};

export default useAlbum;