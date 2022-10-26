import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
};

// const logger = createLogger();

// let middleware = [];

// if (process.env.NODE_ENV === "development") {
//   middleware = [...middleware, thunk, logger];
// } else {
//   middleware = [...middleware, thunk];
// }

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
