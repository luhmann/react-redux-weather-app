import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './home'
import ConnectedCities from './cities'

const App = () =>
  <div className="content">
    <header>
      <Link to="/">Home</Link>
      <Link to="/cities">Cities</Link>
    </header>

    <Route exact path="/" component={Home} />
    <Route exact path="/cities" component={ConnectedCities} />
  </div>

export default App
