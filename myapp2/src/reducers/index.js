import { combineReducers } from "redux";
import auth from "./auth";
import reservation from "./reservation";
import routesRedirect from "./routesRedirect";
import cart from "./cart";

export default combineReducers({ auth, reservation, routesRedirect, cart });
