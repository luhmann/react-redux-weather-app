import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadCities } from '../actions'
import City from '../components/city'

class Cities extends Component {
  componentDidMount() {
    this.props.loadCities(['Berlin', 'Hamburg', 'München', 'New York', 'Tokio'])
  }

  render() {
    return (
      <div className="cities">
        {Object.keys(this.props.cities).map(cityName => {
          const city = this.props.cities[cityName]

          return (
            <City
              key={city.name}
              name={city.name}
              degrees={city.degrees}
              iconUrl={city.iconUrl}
              isLoading={city.isLoading}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => ({
  cities: weather.cities,
})

const mapDispatchToProps = {
  loadCities,
}

export { Cities }

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
