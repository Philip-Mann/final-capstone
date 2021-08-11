import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { casesDataBase } from './services/cases';

export const store = configureStore({
    reducer: {
        [casesDataBase.reducerPath]: casesDataBase.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(casesDataBase.middleware)
});

setupListeners(store.dispatch);
