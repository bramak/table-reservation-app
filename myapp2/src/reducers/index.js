import { combineReducers } from "redux";
import auth from "./auth";
import reservation from "./reservation";

export default combineReducers({ auth, reservation });
