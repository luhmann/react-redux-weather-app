import React from 'react'
import PropTypes from 'prop-types'

const City = ({ degrees, iconUrl = null, name, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="city">
        Loading {name}
      </div>
    )
  }

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
  degrees: PropTypes.number.isRequired,
  iconUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

City.defaultProps = {
  iconUrl: null,
}

export default City
