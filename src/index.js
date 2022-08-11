import React from 'react';
import ReactDOM from 'react-dom/client';
import exportStore from 'redux/store';
import { Provider } from 'react-redux'
import App  from 'components/App/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={exportStore.store}>
      <PersistGate loading={null} persistor={exportStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
