// Import Modules_
import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

// Import Reducers_
import { reducer as metricReducer } from "./Metrics/Reducer";

// Setup Redux Store_
const rootReducer = combineReducers({
  metricReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
