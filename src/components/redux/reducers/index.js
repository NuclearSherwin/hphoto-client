import { combineReducers } from "redux";

import user from "./user";
import counter from './counter'
import login from "./login";

const allReducers = combineReducers({
    user,
    counter,
    login,
})

export default allReducers;