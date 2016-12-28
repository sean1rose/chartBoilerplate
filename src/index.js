import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// middleware is a gatekeeper -> it modifies actions b4 they hit reducers (stops promise until it resolves)
// redux-promise unwraps the promise for us in our action creator before it hits the reducer (the reducer wants data, not a promise)
  // so this middleware, returns the action creator data as a resolved promise (as opposed to a pending promise) for the reducer to use
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// this helps manipulate incoming promise-action, looks at payload property of the action. 
// if the payload is a promise -> redux-promise stops the action entirely and then
// once the request finishes -> it dispatches a new action of the same type
// BUT with a payload of the resolved request

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
