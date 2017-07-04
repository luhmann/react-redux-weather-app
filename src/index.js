import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './containers/app'

import './index.css'

render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.querySelector('#root')
)
