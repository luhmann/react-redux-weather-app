import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import ConnectedCities from './cities'

const App = () =>
  <div className="content">
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/cities">Cities</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/cities" component={ConnectedCities} />
    </main>
  </div>

export default App
