import { createStore, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk"; // Import thunk directly
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from "./Components/Redux/reducers/main";

// Define middleware as an array
const middleware = [thunk];

// Create the store with applyMiddleware
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
