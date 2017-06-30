import React from 'react'
import { shallow } from 'enzyme'

import City from '../city'

describe('Component: City', () => {
  it('should render as expected when not loading', () => {
    const subject = shallow(
      <City
        degrees={20}
        iconUrl="http://example.org/test.png"
        name="Berlin"
        isLoading={false}
      />
    )

    expect(subject).toMatchSnapshot()
  })

  it('should render as expected when loading', () => {
    const subject = shallow(<City isLoading name="Berlin" />)

    expect(subject).toMatchSnapshot()
  })
})
