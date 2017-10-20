import axios from 'axios';

export const FETCH_POSTS="FETCH_POSTS";
export const CREATE_POST="CREATE_POST";
export const FETCH_POST="FETCH_POST";
export const DELETE_POST="DELETE_POST";

const API_KEY="?key=BLABLABALBAL12345";

const ROOT_URL="http://reduxblog.herokuapp.com/api";

export function fetchPosts(){
  let url=`${ROOT_URL}/posts${API_KEY}`;
  const request=axios.get(url);
  return {
    type:FETCH_POSTS,
    payload:request
  }
}

export function createPost(values,callback){
  let url=`${ROOT_URL}/posts${API_KEY}`;
  const request=axios.post(url,values);
  request.then(()=>callback());
  return {
    type:CREATE_POST,
    payload:request
  }
}

export function fetchPost(id){
  let url=`${ROOT_URL}/posts/${id}${API_KEY}`;
  const request=axios.get(url);
  return {
    type:FETCH_POST,
    payload:request
  }
}

export function deletePost(id,callback){
  let url=`${ROOT_URL}/posts/${id}${API_KEY}`;
  const request=axios.delete(url);
  request.then(()=>callback());
  return {
    type:DELETE_POST,
    payload:id
  }
}
