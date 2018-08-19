import { createStore, applyMiddleware, compose, Middleware } from 'redux'
// import * as reduxLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
// import * as process from 'process'
import sagas from '../sagas'

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: Middleware[] = [sagaMiddleware]
  const composeEnhancers = compose

  // if (process.env.NODE_ENV !== 'production') {
  //   const logger = reduxLogger.createLogger({
  //     predicate: (getState, action) => (
  //       action.type !== '@@router/LOCATION_CHANGE'
  //     )
  //   })
  //   middlewares = [ ...middlewares ]
  //   // composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  // }


  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  sagaMiddleware.run(sagas as any)

  return store
}
