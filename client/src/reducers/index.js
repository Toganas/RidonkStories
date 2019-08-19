import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import storyReducers from "./storyReducers";
// import { reducer as formReducer } from "redux-form";


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    story: storyReducers,
    // form: formReducer
});