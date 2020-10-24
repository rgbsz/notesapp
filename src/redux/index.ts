import { createStore } from 'redux'
import { storeReducer } from './reducers'

export const store = createStore(storeReducer)