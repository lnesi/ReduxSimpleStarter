import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm,Field } from 'redux-form';
import * as actions from '../../actions';
import FormInput from '../FormInput';

class SignUp extends Component{
	handleSubmitCallback({email,password,full_name}){
		this.props.signupUser({email,password,full_name})
	}
	renderMessage(){
		if(this.props.errorMessage){
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
				)
		}
	}
	render(){
		return(
			<form className="sign-up" onSubmit={this.props.handleSubmit(this.handleSubmitCallback.bind(this))}>
				<Field name="full_name" label="Full name" component={FormInput} type="text" />
				<Field name="email" label="Email" component={FormInput} type="email" className="form-control"/>
				<Field name="password"  component="input" label="Password" component={FormInput} type="password" />
				<Field name="poassword_confirmation" label="Password confirmation" component={FormInput} type="password"  />
				{this.renderMessage()}
				<button className="btn btn-primary">Sign Up</button>
			</form>
			)
	}
}

const fields=['email','password','poassword_confirmation','full_name'];

function validate(values){
	let errors={};
	fields.forEach(function(v){
		if(!values[v]){
			errors[v]="is required";
		}
	});

	if(values.password && values.poassword_confirmation){
		if(values.password!==values.poassword_confirmation) errors.poassword_confirmation="confirmation does not match.";
	}
	return errors;
}

const formOptions={
	form:'signup',
	fields,
	validate
}
function mapStateToProps({ auth }){
	return { errorMessage:auth.error }
}

export default reduxForm(formOptions)(connect(mapStateToProps,actions)(SignUp));