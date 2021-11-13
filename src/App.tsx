import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './containers/layout';
import { store } from './store';

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Layout />
        </Provider>
      </Router>
    </>
  );
}

export default App;
