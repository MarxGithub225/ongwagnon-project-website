import { combineReducers } from "redux";
import newsReducer from "../modules/Blog/reducers";
import eventReducer from "../modules/Events/reducers";

export default combineReducers({
    newsReducer,
    eventReducer,
});