import React from 'react'
import { shallow, mount } from 'enzyme'

import { Cities } from '../cities'

describe('Container: Cities', () => {
  const mockCities = {
    hamburg: {
      degrees: -5,
      name: 'Hamburg',
      iconUrl: 'http://example.org/icons/hamburg.png',
      isLoading: false,
    },
    berlin: {
      degrees: 10,
      name: 'Berlin',
      iconUrl: 'http://example.org/icons/berlin.png',
      isLoading: false,
    },
    maui: {
      degrees: 28,
      name: 'Maui',
      iconUrl: 'http://example.org/icons/maui.png',
      isLoading: false,
    },
    paris: {
      degrees: 18,
      name: 'Paris',
      iconUrl: 'http://example.org/icons/paris.png',
      isLoading: false,
    },
  }

  it('should render cities passed from redux store', () => {
    const loadCitiesDispatch = jest.fn()

    const subject = shallow(
      <Cities cities={mockCities} loadCities={loadCitiesDispatch} />
    )

    expect(subject).toMatchSnapshot()
  })

  it('should dispatch the loadCities action-creator', () => {
    const loadCitiesDispatch = jest.fn()

    const subject = mount(
      <Cities cities={mockCities} loadCities={loadCitiesDispatch} />
    )

    expect(loadCitiesDispatch.mock.calls.length).toBe(1)
    expect(loadCitiesDispatch.mock.calls[0][0]).toEqual([
      'Berlin',
      'Hamburg',
      'München',
      'New York',
      'Tokio',
    ])
  })
})
