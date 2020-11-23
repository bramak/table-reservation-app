import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./actions/";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import devToolsEnhancer from 'remote-redux-devtools';

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(
    applyMiddleware(thunkMiddleware))
  );
  store.dispatch(verifyAuth());
  return store;
}