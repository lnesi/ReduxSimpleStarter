import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm,Field } from 'redux-form';
import * as actions from '../../actions';

class SignIn extends Component{
	
	handleSubmitForm({email,password}){
		this.props.signinUser({email,password});
	}

	render(){
		const { handleSubmit} = this.props
		return(
			<form className="sign-in" onSubmit={handleSubmit(this.handleSubmitForm.bind(this))} >
				<fieldset className="form-group">
					<label>Email:</label>
					<Field name="email" component="input" type="email" className="form-control" required/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<Field name="password" component="input" type="password" className="form-control" required/>
				</fieldset>
				<button action="submit" className="btn btn-primary">Sign In</button>
			</form>
		);
	}
}

const formConfig={
	form:"signin",
	fields:['email','password']
};

export default reduxForm(formConfig)(connect(null, actions)(SignIn));