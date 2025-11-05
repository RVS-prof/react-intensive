import { useGetPostsQuery } from "../../../API/apislice";

const usePosts = () => {
  const { data } = useGetPostsQuery("");
  {data?.map((post: any) => (
      console.log(post)
      ))}
  return 
};

export default usePosts;