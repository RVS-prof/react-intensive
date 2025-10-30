import LayoutHeader from '../widgets/LayoutHeader/LayoutHeader'
import LayoutFooter from '../widgets/LayoutFooter/LayoutFooter'
import PostLoading from '../widgets/PostList/PostLoading'


export default function MainLayout() {
  return (
    <>
			<LayoutHeader />
			<PostLoading />
			<LayoutFooter />
		</>
  )
}
