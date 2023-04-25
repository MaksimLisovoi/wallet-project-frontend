import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
// import s from './styles/base.module.css';
import App from './App';
import { Provider } from 'react-redux';
// import store from './redux/store';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
