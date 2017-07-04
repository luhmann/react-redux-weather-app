import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { LOCATION_CITIES, switchPage } from '../actions'

import Counter from './counter'

const Home = props =>
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <Counter />
    <button onClick={props.gotoCities}>Go to about page via redux</button>
  </div>

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      gotoCities: () => switchPage(LOCATION_CITIES),
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(Home)
