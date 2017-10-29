import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import  authReducer  from './auth_reducer';
import  featureRedicer  from './feature_reducer';

const rootReducer = combineReducers({
 	form,
 	auth:authReducer,
 	feature:featureRedicer
});

export default rootReducer;
