import React, { ComponentType } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import StartPage from './pages/start-page';
import { rootReducer } from './store/reducers';

const store = createStore(rootReducer);
// LOL
function render(Component: ComponentType<{}>) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>
    ,
    document.getElementById('root')
  );
}

render(StartPage);
