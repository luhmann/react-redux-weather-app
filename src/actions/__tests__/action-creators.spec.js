import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import { INCREMENT, increment, DECREMENT, decrement, fetchCity } from '../'

describe('Actions: Counter', () => {
  it('should create the correct incement-action', () => {
    const expectedAction = {
      type: INCREMENT,
      payload: 1,
    }

    expect(increment()).toEqual(expectedAction)
  })
})

const berlinResponseMock = {
  coord: { lon: 13.41, lat: 52.52 },
  weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
  base: 'stations',
  main: {
    temp: 289.15,
    pressure: 999,
    humidity: 87,
    temp_min: 289.15,
    temp_max: 289.15,
  },
  visibility: 10000,
  wind: { speed: 9.3, deg: 260 },
  clouds: { all: 90 },
  dt: 1498812600,
  sys: {
    type: 1,
    id: 4892,
    message: 0.0026,
    country: 'DE',
    sunrise: 1498790842,
    sunset: 1498851154,
  },
  id: 2950159,
  name: 'Berlin',
  cod: 200,
}

describe('Actions: Weather', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  afterEach(() => {
    nock.cleanAll()
  })

  it('dispatches the correct actions when successfully fetching a city', () => {
    nock('http://api.openweathermap.org')
      .get('/data/2.5/weather?q=Berlin&appid=51cde100c00b0ec934144479e58b67eb')
      .reply(200, berlinResponseMock)

    const store = mockStore({ cities: {} })

    return store.dispatch(fetchCity('Berlin')).then(() => {
      expect(store.getActions()).toMatchSnapshot()
    })
  })
})
