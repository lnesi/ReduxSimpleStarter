import { combineReducers } from 'redux';
import PostReducer from './posts_reducers';
import { reducer as formReducer } from 'redux-form';
// formReducer needs to be bind allways to the key "form"

const rootReducer = combineReducers({
  posts:PostReducer,
  form:formReducer  
});

export default rootReducer;
