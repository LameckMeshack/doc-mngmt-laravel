import { createStore, applyMiddleware } from "redux";

import { rootReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//initial state
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
