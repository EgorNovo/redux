import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions as favAction } from '../store/favorites/favorites.slice'
import  * as userActions  from '../store/user/user.actions'

const rootActions = {
	...favAction,
	...userActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => 
		bindActionCreators(rootActions, dispatch)
	, [dispatch])
}