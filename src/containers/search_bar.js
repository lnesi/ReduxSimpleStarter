import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={term:''};
    this.onInputChange=this.onInputChange.bind(this);
    this.onSubmitHanlder=this.onSubmitHanlder.bind(this);
  }
  onInputChange(e){
    
    this.setState({term:e.target.value});

  }
  onSubmitHanlder(e){
      e.preventDefault();
      this.props.fetchWeather(this.state.term);
      this.setState({term:''});
  }
  render(){
    return(
      <form className="input-group" onSubmit={this.onSubmitHanlder}>
        <input
        value={this.state.term}
        placeholder="Get a five-day forecast in your favorite cities"
        onChange={this.onInputChange}
        className="form-control" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }

}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}
//first argument needs to be null because we are not binding the state to props in this Component
export default connect(null,mapDispatchToProps)(SearchBar);
