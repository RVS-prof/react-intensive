import MySelect from "../../../shared/ui/Select/select";
import type { IByLength, ISetterByLength} from "../type"

const PostLengthFilter = (props : ISetterByLength ) => {
  const lengthArray : IByLength[] = ["long" , "short" , "default"]

  const handleChange = (lengthL: IByLength) => {
    props.setLength(lengthL);
  };

  return (
    <>
      <MySelect options={lengthArray} value={props.lengthL} onChange={handleChange}/>
    </>
  )
}

export default PostLengthFilter