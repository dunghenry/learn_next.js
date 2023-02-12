// eslint-disable-next-line
import Symbol_observable from 'symbol-observable';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './rootReducer';
import logger from './logger';
const makeStore = () =>
    configureStore({
        reducer: logger(rootReducer),
        middleware: [],
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);
