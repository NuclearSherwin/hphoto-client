import { combineReducers } from "redux";

import user from "./user";
import counter from './counter'

const allReducers = combineReducers({
    user,
    counter,
})

export default allReducers;