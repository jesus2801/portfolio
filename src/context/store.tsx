import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/index';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' &&
      typeof (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f,
  ),
);

export default store;
