import { combineReducers } from "redux";

import user from "./reducers/user";
import counter from "./reducers/counter";
import search from "./reducers/search";

const allReducers = combineReducers({
  user,
  counter,
  search,
});

export default allReducers;
