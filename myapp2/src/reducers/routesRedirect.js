import {LAST_LOCATION_ROUTE } from "../actions/routesRedirect";

const initialState = {
  lastRoute: "/", // string, to redirect to last route after login

};

function routesRedirectReducer(state = initialState, action) {
  switch (action.type) {
    case LAST_LOCATION_ROUTE: {
      return {
        ...state,
        lastRoute: action.lastRoute,
      };
    }
    
    default:
      return state;
  }
}

export default routesRedirectReducer;
