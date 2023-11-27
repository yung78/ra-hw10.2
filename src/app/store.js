import { configureStore } from '@reduxjs/toolkit'
import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';

const reducer = {
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
};

const store = configureStore({reducer: reducer});

export default store;
