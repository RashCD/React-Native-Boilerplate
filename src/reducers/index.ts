import { combineReducers, Reducer } from "redux";
import data from "../dummyData/LibraryList";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from "./SelectionReducer";

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
