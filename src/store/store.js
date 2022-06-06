import { createStore } from 'redux';
import { rootReducer } from './redux/redux';


export const store = createStore(rootReducer);