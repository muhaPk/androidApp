import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer';
import groupReducer from './groupReducer';
import fileReducer from './fileReducer';
import groupMessageReducer from './groupMessgeReducer'

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupReducer,
  groupMessages: groupMessageReducer,
  files: fileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
