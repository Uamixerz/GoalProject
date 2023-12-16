import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AuthReducer } from "../login/AuthReducer.ts";


export const rootReducer = combineReducers({
  auth: AuthReducer
});

// @ts-ignore
export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunk]
});
