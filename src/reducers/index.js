import { combineReducers } from 'redux'

import { routerReducer } from '../store/routing'

import counter from './counter'
import city from './city'

export default combineReducers({
  weather: city,
  counter,
  location: routerReducer,
})
