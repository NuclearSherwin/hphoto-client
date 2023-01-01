import { combineReducers } from "redux";

import user from "./reducers/user";
import counter from './reducers/counter'

const allReducers = combineReducers({
    user,
    counter,
})

export default allReducers;