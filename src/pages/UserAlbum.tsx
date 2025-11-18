import { useParams } from "react-router";
import useAlbum from "../features/UserList/model/hooks/useAlbum"
import style from "./UserStyle.module.css"
import pepe from "./svg/kermit-the-frog.svg"
import { filterByField } from "../shared/ui/ItemList/ItemList";
import Loader from "../shared/ui/loader/loader";

export const UserAlbum = () => {
  const { album, isLoading } = useAlbum()
  const searchParams = useParams();
  const userId = Number(searchParams['id'])
  const filteredAlbum = filterByField(album, 'userId', userId);

  const getAlbum = () => {
    return (
        filteredAlbum.map(element => 
          <section className={style['card']}>
            <header>
              {element.title}
            </header>
            <img className={style['img']} src={pepe} alt="" />
          </section>
        )
    )
  }

  return (
    <section className={style['flexBox']}>
      <Loader isLoading={isLoading} thirdPartyFunction={getAlbum}/>
    </section>
  )
}
