import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../store/rootSaga'
import rootReducer from '../store/rootReducer'

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleWare),
})
sagaMiddleWare.run(rootSaga)
export type AppDispatch = typeof store.dispatch
export default store;