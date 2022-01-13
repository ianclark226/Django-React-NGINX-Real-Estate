import { combineReducers } from "redux";
import { propertiesListReducer } from "./propertyReducer";

export default combineReducers({
	propertiesList: propertiesListReducer,
});