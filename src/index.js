import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
// import { App } from 'components/App/App';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store} > */}
      {/* <PersistGate loading={null} persistor={persistor} > */}
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </React.StrictMode>
);
