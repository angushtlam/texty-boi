import React from 'react'
import {render} from 'react-dom'
import {createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import reducers from './reducers'

const store = createStore(reducers, compose)

const rerender = Component => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>
  , document.getElementById('app'))  
}

if (module.hot) {
  module.hot.accept('./App', () => { rerender(App) })
  module.hot.accept('./reducers', () => { store.replaceReducer(reducer) })
}

rerender(App)
