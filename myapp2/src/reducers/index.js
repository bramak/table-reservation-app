import { combineReducers } from "redux";
import auth from "./auth";
import reservation from "./reservation";
import routesRedirect from "./routesRedirect";

export default combineReducers({ auth, reservation, routesRedirect });
