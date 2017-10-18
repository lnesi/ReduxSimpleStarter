import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){
  switch(action.type){
    case FETCH_WEATHER:
      return state.concat([action.payload.data]); //es6 [actoins.payload.data, ...state]
    default:
    return state;
  }
}
