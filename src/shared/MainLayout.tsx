import LayoutHeader from '../widgets/LayoutHeader/LayoutHeader'
import LayoutFooter from '../widgets/LayoutFooter/LayoutFooter'
import PostList from '../widgets/PostList/PostList'


export default function MainLayout() {
  return (
    <>
			<LayoutHeader />
			<PostList />
			<LayoutFooter />
		</>
  )
}
