import style from "./MyButton.module.css"

export const MyButton = ({...props} ) => {
  return (
    <button className={style['button']} {...props}>
      {props['children']}
    </button>
  )
}
