import type { Post } from "../../../entities/entity/model/type";
import type { IPostLengthFilter } from "../type"

export const filterByLength = ( props : IPostLengthFilter) => {
  const newArray : Post[] = JSON.parse(JSON.stringify(props.posts))

  switch(props.headerLength) {
    case "short":
      newArray.sort((a, b) => a.title.length - b.title.length)
      break;
    case "long":
      newArray.sort((a, b) => b.title.length - a.title.length)
      break;
  }
  
  return newArray
}