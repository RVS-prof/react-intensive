import MySelect from "../../../shared/ui/Select/select";
import type { IByLength, ISetterByLength} from "../../../types/types"

const PostLengthFilter = (props : ISetterByLength ) => {
  const lengthArray : IByLength[] = ["long" , "short" , "default"]

  const handleChange = (lengthL: IByLength) => {
    props.setLength(lengthL);
  };

  return (
    <form>
      <MySelect options={lengthArray} value={props.lengthL} onChange={handleChange}/>
    </form>
  )
}

export default PostLengthFilter