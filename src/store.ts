import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import saga from './saga';
import connectorsReducer from './store/connectors/slice'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const appReducer = combineReducers({
  conntors: connectorsReducer
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
})

sagaMiddleware.run(saga);
