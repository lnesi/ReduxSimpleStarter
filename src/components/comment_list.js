import React, {Component} from 'react';
import {connect} from 'react-redux';

const CommentList = (props)=>{	
	const list=props.comments.map((comment,i)=><li key={i}>{comment}</li>);
	return(
		<ul className="comment-list list-group">{list}</ul>
		)
}
function mapStateToProps({comments}){
	return {comments}
}

export default connect(mapStateToProps)(CommentList);