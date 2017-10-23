import React, {Component} from 'react';
import { connect } from 'react-redux';
// we can only aceceess properties in context when we define that we going to do so
// Never over use contect over  props
export default function(ComposeComponent){
  class Authentication extends Component{
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount(){
      if(!this.props.authenticated)  this.context.router.push("/");
    }
    componentWillUpdate(nextProps){
      if(!nextProps.authenticated)  this.context.router.push("/");
    }
    // It is imporant to pass through the props
    render(){
        return <ComposeComponent {...this.props} />
    }
  }

  function mapStateToProps(state){
    return {authenticated:state.authenticated}
  }
  return connect(mapStateToProps)(Authentication);
}
