import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
	schoolabroad
} from './reducers/rootReducer';
import { loadState, saveState } from './localStorage.js';
import throttle from 'lodash/throttle';

export const configureStore = () => {
  const loggerMiddleware = createLogger();
  const persistedState = loadState();

  let store = createStore(
    schoolabroad,
    persistedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

  store.subscribe(throttle(() => {
  	saveState({
			isUserAuthenticated: true,
			user: store.getState().user
		});
  }, 1000));

  return store;
};
