import { configureStore} from '@reduxjs/toolkit';
import contactsReducer from "redux/contactsSlice";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';

const contactPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'], 
};

const store = configureStore({
    reducer: {
    contacts: persistReducer(contactPersistConfig,contactsReducer),
},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

const exportStore = {
    store,
    persistor,
};
export default exportStore;











