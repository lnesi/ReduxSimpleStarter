import { AUTH_USER } from './actions/types';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const chromeRedux=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store =createStoreWithMiddleware(reducers,chromeRedux);

const token = localStorage.getItem('token');

if(token){
	// Here we should add some logic to validate the token existance (expiration);
	store.dispatch({type:AUTH_USER});
}

export default store
