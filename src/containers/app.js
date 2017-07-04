import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'

import { mapRouteToComponent } from '../store/routing'

const App = ({ Page }) =>
  <div className="content">
    <header>
      <Link to="/">Home</Link>
      <Link to="/cities">Cities</Link>
    </header>

    <Page />
  </div>

const mapStateToProps = ({ location }) => ({
  Page: mapRouteToComponent(location.type),
})

export { App }

export default connect(mapStateToProps)(App)
