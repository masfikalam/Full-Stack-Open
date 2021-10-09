import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import App from "./App";
import "./index.css";
import blogReducer from "./reducers/blogs";
import messageReducer from "./reducers/message";
import userReducer from "./reducers/users";

const reducers = combineReducers({
  blogs: blogReducer,
  user: userReducer,
  message: messageReducer,
});
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
