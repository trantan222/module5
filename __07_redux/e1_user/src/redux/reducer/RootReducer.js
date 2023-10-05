import { combineReducers } from "redux";
import userReducers from "./UserReducer";


const rootReducer = combineReducers({
    users: userReducers,
    // Add other reducers here if needed
});

export default rootReducer;
