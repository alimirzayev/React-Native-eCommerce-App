import {createStore, combineReducers} from 'redux'
import Reducer from './Reducer'

const reducers = combineReducers({cart:Reducer})
const store = createStore(reducers)

export default store