import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";
import thunk from "redux-thunk";

let store;
if (process.env.NODE_ENV === "development") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(reducers, applyMiddleware(thunk));
}
let mapDispatchToProps = (state) => {
  console.log("statestaetatse",state)
  return state
}
export { store, mapDispatchToProps };
