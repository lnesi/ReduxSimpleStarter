import _ from 'lodash';

export default function({dispatch}){
  return next => action =>{
    //we need to check that the action is the one we need
    //if action.payload instance of promise  is important 
    if(!action.payload || !action.payload.then){
        return next(action);
    }
    // wait for the promise to resolve
    action.payload.then((result)=>{
      // because this is a new action we need to make sure it flows through all the middlwares again
      // for that instead of call next wich will continue the chain we will dispatch a new action
      dispatch({...action,payload:result});
    });

  }
}


// es5 version of the arrow functions

// export default function({dispatch}){
//   return function(next){
//     return function(action){
//       next(action);
//     }
//   }
// }
