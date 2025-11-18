import { useParams } from "react-router";
import style from "./UserStyle.module.css"
import useToDos from "../features/UserList/model/hooks/useTodos";
import { filterByField } from "../shared/ui/ItemList/ItemList";
import Loader from "../shared/ui/loader/loader";

export const UserToDos = () => {
  const { todos, isLoading } = useToDos()
  const searchParams = useParams();
  const userId = Number(searchParams['id'])
  const filteredTodos = filterByField(todos, 'userId', userId);

  const getTodos = () => {
    return (
        filteredTodos.map(element => 
          <section className={`${style['card']} ${style['cardColumn']}`}>
            <header>
              <h1>
                Task : {element.title}
              </h1>
            </header>
            {element.completed
              ? <p className={style['Unfinished']}>Unfinished</p>
              : <p className={style['Completed']}>Completed</p>
            }
          </section>
        )
    )
  }

  return (
    <section className={style['flexBox']}>
      <Loader isLoading={isLoading} thirdPartyFunction={getTodos}/>
    </section>
  )
}
