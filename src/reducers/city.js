import { REQUEST_CITY, RECEIVE_CITY } from '../actions'

const initialState = {
  cities: {},
}

const isCityLoaded = (state, city) =>
  Boolean(Object.keys(state.cities).filter(item => item.name === city).length)

const kelvinToCelsius = kelvin => parseInt((kelvin - 274.15) * 100, 10) / 100

const getIconUrl = icon => `http://openweathermap.org/img/w/${icon}.png`

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CITY:
      if (!isCityLoaded(state, action.payload)) {
        return {
          ...state,
          cities: {
            ...state.cities,
            [action.payload]: { name: action.payload, isLoading: true },
          },
        }
      }
      return state
    case RECEIVE_CITY:
      return {
        ...state,
        cities: {
          ...state.cities,
          [action.payload.name]: {
            name: action.payload.name,
            isLoading: false,
            degrees: kelvinToCelsius(action.payload.response.main.temp),
            iconUrl: getIconUrl(action.payload.response.weather[0].icon),
          },
        },
      }
    default:
      return state
  }
}
