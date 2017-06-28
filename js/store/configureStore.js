import { createStore } from 'redux'
import reducers from '../reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore () {
	return createStore(
		reducers,
		devTools
	)
}
