import { combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'

import thunk from "redux-thunk";

import {
  propertyListReducer,
  featuredPropertyReducer,
  propertyReducer,
} from "./reducers/propertiesReducer";

import {
  featuredAgentsReducer,
  agentListReducer,
  agentReducer,
} from "./reducers/agentsReducer";
import { messagesReducer } from "./reducers/messagesReducer";

const middlewares = [thunk];

const reducer = combineReducers({
  propertyList: propertyListReducer,
  featuredProperty: featuredPropertyReducer,
  featuredAgents: featuredAgentsReducer,
  agentList: agentListReducer,
  agent: agentReducer,
  property: propertyReducer,
  messageList: messagesReducer,
  auth: authReducer
});
const intialState = {};

const store = configureStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
