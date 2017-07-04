import { connectRoutes } from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

import { LOCATION_HOME, LOCATION_CITIES, LOCATION_NOT_FOUND } from '../actions'

import Home from '../containers/home'
import ConnectedCities from '../containers/cities'

const history = createHistory()

const routesMap = {
  [LOCATION_HOME]: '/',
  [LOCATION_CITIES]: '/cities',
}

const componentMap = {
  [LOCATION_HOME]: Home,
  [LOCATION_CITIES]: ConnectedCities,
  [LOCATION_NOT_FOUND]: Home,
}

export const mapRouteToComponent = (route = LOCATION_NOT_FOUND) =>
  componentMap[route] || componentMap[LOCATION_NOT_FOUND]

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap)

export {
  reducer as routerReducer,
  middleware as routerMiddleware,
  enhancer as routingEnhancer,
}
