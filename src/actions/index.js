import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	AUTH_LOADING ,
	AUTH_USER, 
	UNAUTH_USER, 
	AUTH_ERROR,
	FETCH_MESSAGE 
} from './types';



const ROOT_URL="http://localhost:3090";

export function signinUser({email,password}){
	
	return function(dispatch){
		dispatch({type:AUTH_LOADING});
		//submit to server
		const request= axios.post(`${ROOT_URL}/signin`,{email,password});
		// if is good
		request.then((response)=>{
			//dispatch(authOK(response.data.token));
			//update state to indicate user authenticated
			dispatch({type:AUTH_USER});
			// save JWT 
			//localStorage.setItem('token',response.data.token);
			// redirect to protected route
			// browserHistory.push("/feature");
			dispatch(authOK(response.data.token));
		});

		//if is bad
		request.catch((error)=>{
			//console.log(error);
			// show an error to the user
			dispatch(authError('Bad Sign In Info'));
		});
		
	}
	
};

export function signupUser({email,password,full_name}){
	return function(dispatch){
		dispatch({type:AUTH_LOADING});
		const request=axios.post(`${ROOT_URL}/signup`,{email,password,full_name})
		.then((response)=>{
			dispatch(authOK(response.data.token));
		})
		.catch(error=>dispatch(authError(error.response.data.error)));
		
	}
}

export function authOK(token){
	localStorage.setItem('token',token);
	browserHistory.push("/feature");
	return ({type:AUTH_USER});
}

export function authError(error){
	return {
		type:AUTH_ERROR,
		payload:error
	};
}

export function signoutUser(){
	//localStorage.removeItem('token');
	localStorage.clear();
	return  {type:UNAUTH_USER};
}

export function fetchMessage(){
	return function(dispatch){
		axios.get(`${ROOT_URL}/`,
			{headers:{authorization:localStorage.getItem('token')}}
		).then((response)=>{
			dispatch({type:FETCH_MESSAGE,payload:response.data.message});
		}).catch((error)=>{
			browserHistory.push("/");
			dispatch({type:UNAUTH_USER});
		});
	}
}