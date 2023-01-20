import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
// import { App } from 'components/App/App';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store} > */}
      {/* <PersistGate loading={null} persistor={persistor} > */}
        <App />
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
