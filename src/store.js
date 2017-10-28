import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

export default createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
