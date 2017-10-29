import { FETCH_MESSAGE } from '../actions/types';

export default function(state={message:''},action){
	switch(action.type){
		case FETCH_MESSAGE:
			return {...state,message:action.payload}
		default:
			return state;
	}
}