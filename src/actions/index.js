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

export const REQUEST_CITY = 'REQUEST_CITY'
export const RECEIVE_CITY = 'RECEIVE_CITY'

export const requestCity = city => ({
  type: REQUEST_CITY,
  payload: city,
})

export const receiveCity = response => ({
  type: RECEIVE_CITY,
  payload: {
    response,
  },
})

const getCityWeatherUrl = city =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51cde100c00b0ec934144479e58b67eb`

export const fetchCity = city => dispatch => {
  dispatch(requestCity(city))

  return fetch(getCityWeatherUrl(city))
    .then(data => data.json())
    .then(response => dispatch(receiveCity(response)))
    .catch(err => {
      console.error(err)
    })
}

export const loadCities = cities => dispatch => {
  cities.map(city => dispatch(fetchCity(city)))
}
