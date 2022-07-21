import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
// thunk is a middleware for what ?
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducers";




const reducer = combineReducers({
    productList: productListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;
