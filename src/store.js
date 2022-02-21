import { createStore } from "redux";
import authData from "./reducers";
console.log({authData});
const store= createStore(authData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store