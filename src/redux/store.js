import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/slice";
import contactsSlice from "./contacts/slice";
import filtersSlice from "./filters/slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

 


const persistedAuthReducer = persistReducer(
    {
    key: 'user-token',
    storage,
    whitelist:['token'],
  },
   authSlice)





export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        auth: persistedAuthReducer,
        filters: filtersSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export const persistor = persistStore(store);