import React from 'react';
// redux-form form input bootstrap html 
export default function({input,label,type,meta:{touched,error,warning}}){
	const hasError = touched && error
	return(
		<fieldset className={(touched && error)?'form-group has-danger':'form-group'}>
			<label>{label}:</label>
			<input {...input} placeholder={label} className="form-control" type={type}/>
			{hasError?<small className="text-muted text-danger">{error}</small>:null}
		</fieldset>
	)
}	