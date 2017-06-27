import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { increment, decrement } from '../actions'

const Counter = ({ count, increment, decrement }) =>
  <div>
    Count is {count}
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  </div>

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.function,
  decrement: PropTypes.function,
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
})

const mapDispatchToProp = dispatch =>
  bindActionCreators(
    {
      increment: () => increment(5),
      decrement: () => decrement(5),
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
