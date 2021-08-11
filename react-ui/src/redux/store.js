// import { applyMiddleware, compose, createStore } from "redux";
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { casesDataBase } from './services/cases'

export const store = configureStore({
    reducer: {
        [casesDataBase.reducerPath]: casesDataBase.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(casesDataBase.middleware)
});

setupListeners(store.dispatch);
