import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { Layout } from './containers/layout';
import { store } from './store';
import { Notifier } from './components/Notifier';

function App() {
  return (
    <>
      <Router>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Provider store={store}>
            <Notifier />
            <Layout />
          </Provider>
        </SnackbarProvider>
      </Router>
    </>
  );
}

export default App;
