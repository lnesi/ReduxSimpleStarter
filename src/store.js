import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import asynMiddleware from "./middlewares/async";

const createStoreWithMiddleware = applyMiddleware(asynMiddleware)(createStore);

export default createStoreWithMiddleware(reducers);
