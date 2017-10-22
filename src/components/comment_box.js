import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class CommentBox extends Component{
	constructor(props){
		super(props);
		this.state={comment:''}
	}
	
	onChangeHandler(e){
		this.setState({comment:e.target.value});

	}
	onSubmitHandler(e){
		e.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({comment:''});
	}
	render(){
		return (
			<form className="comment-box" onSubmit={this.onSubmitHandler.bind(this)}>
				<h4> Add Comment</h4>
				<textarea className="form-control"
					value={this.state.comment} 
					onChange={this.onChangeHandler.bind(this)} />
				<div>
				<button style={{marginTop:10+'px'}} type="submit" className="btn btn-primary">Submit Comment</button>
				</div>
			</form>
			);
	}
}

export default connect(null, actions)(CommentBox);