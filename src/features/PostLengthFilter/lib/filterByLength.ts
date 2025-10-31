import type { IPost, IPostLengthFilter } from "../../../types/types"

export const filterByLength = ( props : IPostLengthFilter) => {
  const newArray : IPost[] = JSON.parse(JSON.stringify(props.newPosts))

  switch(props.headerLength) {
    case "long":
      newArray.sort((a, b) => a.title.length - b.title.length)
      break;
    case "short":
      newArray.sort((a, b) => b.title.length - a.title.length)
      break;
  }

  props.setNewPosts(newArray)
}