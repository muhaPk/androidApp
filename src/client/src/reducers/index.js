// import { composeWithDevTools } from "redux-devtools-extension";
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from "redux-thunk";
// import userReducer from "./userReducer";
// import groupReducer from "./groupReducer";
// import fileReducer from "./fileReducer";
//
// const rootReducer = combineReducers({
//     user: userReducer,
//     groups: groupReducer,
//     files: fileReducer,
// })

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// )

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer';
import groupReducer from './groupReducer';
import fileReducer from './fileReducer';

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupReducer,
  files: fileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
