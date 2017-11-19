import { combineReducers } from 'redux';
import data from '../dummyData/LibraryList';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    libraries: () => data
});
