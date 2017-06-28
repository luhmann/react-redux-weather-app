import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import counter from './counter'
import city from './city'

export default combineReducers({
  weather: city,
  counter,
  routing: routerReducer,
})
