import React from 'react'
import hold from 'react-hold'
import PropTypes from 'prop-types'

const City = ({ degrees, iconUrl = null, name }) => {
  return (
    <div className="city">
      <div className="city__name">
        {name}
      </div>
      <div className="city__info">
        {iconUrl && <img src={iconUrl} />}
        {degrees}°C
      </div>
    </div>
  )
}

City.propTypes = {
  degrees: PropTypes.number,
  iconUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

City.defaultProps = {
  iconUrl: null,
  degrees: null,
}

export default hold(City, props => props.isLoading)
