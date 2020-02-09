import { createStore } from "redux";
import reducers from "./reducers";


let store;
if (process.env.NODE_ENV === "development") {
    store = createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
} else {
    store = createStore(reducers);
}
export default store