import { AUTH_USER } from './types';
import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL="http://localhost:3090";

export function signinUser({email,password}){
	
	return function(dispatch){
		dispatch({type:"SIGN_LOADING", payload:null});
		//submit to server
		const request= axios.post(`${ROOT_URL}/signin`,{email,password});
		// if is good
		request.then((resp)=>{
			//update state to indicate user authenticated
			dispatch({type:"AUTH_USER"});
			// save JWT 
			
			// redirect to protected route
			browserHistory.push("/feature");
		});

		//if is bad
		request.catch((error)=>{
			dispatch({type:"SIGN_IN_ERROR",payload:error});
		});
		// show an error to the user
	}
	
};