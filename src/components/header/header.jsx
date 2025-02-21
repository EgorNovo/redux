import { useSelector } from 'react-redux'

export const Header = () => {

	const { favorites } = useSelector(state => state);
	return (
		<span> Count my favorites recipes: {favorites.length}</span>
	)
}
