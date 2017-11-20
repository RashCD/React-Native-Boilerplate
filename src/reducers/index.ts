import { combineReducers, Reducer } from 'redux';
import data from '../dummyData/LibraryList';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// interface IAction {
//     type: any;
// }
// type Reducer<S> = (state: S, action: IAction) => S;
// interface IReducersMapObject {
//     [key: string]: Reducer<any>;
// }
// declare function combineReducers<S>(reducers: IReducersMapObject): Reducer<S>;

// interface IState {
//     data: {};
// }

// const reducers: Reducer<IState> = combineReducers<IState>({ libraries: () => data });

// export default reducers;

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});
