import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import { AppWithRouter } from './router/router'
import reducer from './store/reducers'

import rootSaga from './store/sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <AppWithRouter />
    </Provider>,
    document.getElementById('root')
  )
}

render()
// store.subscribe(render)
