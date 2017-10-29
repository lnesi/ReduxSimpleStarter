import React, { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';
class Feature extends Component{
	componentWillMount(){
		this.props.fetchMessage();
	}
	render(){
		return(
			<div>
				<h1>Feuture</h1>
				<p>{this.props.message}</p>
			</div>
		)
	}
}
function mapStateToProps({feature}){
	return {message:feature.message};
}
export default connect(mapStateToProps,actions)(Feature);
