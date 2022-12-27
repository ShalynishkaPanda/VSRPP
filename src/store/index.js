import { createStore } from 'redux';
import entering from '../reducers/loginned';

const store = createStore(entering, false);

export default store;