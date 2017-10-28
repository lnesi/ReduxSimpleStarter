import { AUTH_USER, UNAUTH_USER } from '../actions/types';

export default function(state = {authentincated:false,error:''},action){
	switch(action.type){
		case AUTH_USER:
			return {...state,authentincated:true};
		case UNAUTH_USER:
			return {...state,authentincated:false};

		default:
			return state;
	}
}