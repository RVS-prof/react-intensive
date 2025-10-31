import type { IByLength, ISetterByLength} from "../../../types/types"


interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name: string;
}


const PostLengthFilter = (props : ISetterByLength ) => {
  const lengthArray : IByLength[] = ["long" , "short" , "default"]

  const handleChange = (lengthL: IByLength) => {
    props.setLength(lengthL);
  };

  return (
    <form>
      {lengthArray.map((el : IByLength) => {
        return <label key={el} className="radio-label">
          <input
            type="radio"
            name={'checkLength'}
            value={el}
            checked={el === props.lengthL}
            onChange={(e : any) => handleChange(e.target.value)}
          />
          <span>{el}</span>
        </label>
      })}
    </form>
  )
}

export default PostLengthFilter