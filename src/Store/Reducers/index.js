// slices/rootReducer.js

import { combineReducers } from "redux"; 
import blogReducer from "./blogReducer";
import weatherReducer from "./weatherReducer";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  blog: blogReducer,
  weather: weatherReducer,
  contact: contactReducer,
});

export default rootReducer;
