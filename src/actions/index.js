import fetch from 'isomorphic-fetch'

export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'

export const increment = (amount = 1) => ({
  type: INCREMENT,
  payload: amount,
})

export const decrement = (amount = 1) => ({
  type: DECREMENT,
  payload: amount,
})

export const FETCH_CITY_REQUEST = 'FETCH_CITY_REQUEST'
export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS'
export const FETCH_CITY_ERROR = 'FETCH_CITY_ERROR'

export const requestCity = city => ({
  type: FETCH_CITY_REQUEST,
  payload: city,
})

export const receiveCity = (city, response) => ({
  type: FETCH_CITY_SUCCESS,
  payload: {
    name: city,
    response,
  },
})

export const errorCity = (city, error) => ({
  type: FETCH_CITY_ERROR,
  payload: {
    name: city,
    error,
  },
})

const getCityWeatherUrl = city =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51cde100c00b0ec934144479e58b67eb`

export const fetchCity = city => dispatch => {
  dispatch(requestCity(city))

  return fetch(getCityWeatherUrl(city))
    .then(data => data.json())
    .then(response => dispatch(receiveCity(city, response)))
    .catch(err => dispatch(errorCity(city, err)))
}

export const loadCities = cities => dispatch => {
  cities.map(city => dispatch(fetchCity(city)))
}

export const LOCATION_HOME = 'LOCATION_HOME'
export const LOCATION_CITIES = 'LOCATION_CITIES'
export const LOCATION_NOT_FOUND = 'LOCATION_NOT_FOUND'

export const switchPage = (page, payload) => ({
  type: page,
  payload,
})
