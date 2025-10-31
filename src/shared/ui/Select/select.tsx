
const MySelect = ({options, value, onChange} : any) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      {options.map((option: any) => 
        <option key={option} value={option}>
          {option}
        </option>
      )}
    </select>
  )
}

export default MySelect