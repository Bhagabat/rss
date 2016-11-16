import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider} from 'react-redux';

import { createStore, renderDevTools } from '../store_enhancers/devTools';


import * as reducers from '../reducers';
import Editor from './MainContainer';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <Editor /> }
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}

