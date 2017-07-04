import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'

import { routerMiddleware, routingEnhancer } from './routing'

const initialState = {}
const enhancers = [routingEnhancer]
const middleware = [thunk, routerMiddleware]

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(rootReducer, initialState, composedEnhancers)

export default store
