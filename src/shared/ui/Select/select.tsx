import style from "./select.module.css"

const MySelect = ({options, value, onChange} : any) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
      className={style.select}
    >
      {options.map((option: any) => 
        <option 
          key={option} 
          value={option}
          className={style.option}
        >
          {option}
        </option>
      )}
    </select>
  )
}

export default MySelect

