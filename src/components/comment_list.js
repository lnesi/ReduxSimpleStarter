import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const CommentList = (props)=>{	
	const transitionOptions = {
		//the name fade is the name of the first part of yje class name needed on the css
		transitionName: "fade", 
		transitionEnterTimeout:500,
		transitionLeaveTimeout:500
	};

	const list=props.comments.map((comment,i)=>{
		return (
			<li className="list-group-item" key={i}>{comment}</li>
			)
	});
	return(
		<ul className="comment-list list-group">
			<ReactCSSTransitionGroup {...transitionOptions}>
			{list}
			</ReactCSSTransitionGroup>
		</ul>
		)
}
function mapStateToProps({comments}){
	return {comments}
}

export default connect(mapStateToProps)(CommentList);