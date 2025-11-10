import { useParams } from "react-router";
import style from "./UserStyle.module.css"
import useToDos from "../features/UserList/model/hooks/useTodos";

export const UserToDos = () => {
  const { todos, isLoading } = useToDos()
  const searchParams = useParams();
  const userId = searchParams.id

  const filteredTodos = todos
    .filter(element => element.userId == userId)

  const loadingFunc = () => {
    return (
      <div>
        Загрузка...
      </div>
    )
  }

  const getTodos = () => {
    return (
        filteredTodos.map(element => 
          <section className={`${style.card} ${style.cardColumn}`}>
            <header>
              <h1>
                Task : {element.title}
              </h1>
            </header>
            {element.completed
              ? <p className={style.Unfinished}>Unfinished</p>
              : <p className={style.Completed}>Completed</p>
            }
          </section>
        )
    )
  }

  return (
    <section className={style.flexBox}>
      {isLoading
        ? loadingFunc()
        : getTodos()
      }
    </section>
  )
}
