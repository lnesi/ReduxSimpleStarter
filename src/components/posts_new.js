import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';

class PostsNew extends Component{
  renderField(field){
    //{...field.input} this is a way to send the props to the input so we dont have to use <input onChange={field.input.onChane} onBlurrr, onDrop, onDragStart, name, value ....
    const {meta:{touched,error}} = field;
    const groupClassName= `form-group ${touched && error? 'has-danger': ''}`;
    return(
        <div className={groupClassName}>
          <label htmlFor={field.id}>{field.label}</label>
          <input {...field.input} id={field.id} type="text" className="form-control" />
          <small className="text-help">{touched?error:''}</small>
        </div>
    );
  }
  onSubmitHandler(values){
  
    this.props.createPost(values,()=>{
      this.props.history.push("/");
    });
  }
//Any property that we add here will be passed into the field parameter in the component funcion (exept name)
// The name property is how we define values keys in the validate function.
  render(){
      const handleSubmit = this.props.handleSubmit;
      return (
        <form onSubmit={handleSubmit(this.onSubmitHandler.bind(this))}>
          <Field label="Title" name="title" id="in_title"  component={this.renderField} />
          <Field label="Categories" name="categories" id="in_categories"  component={this.renderField} />
          <Field label="Content" name="content" id="in_content"  component={this.renderField} />
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      )
  }
}

function validate(values){
    const error = {};
    if(!values.title){
      error.title="Enter a title";
    }

    if(!values.categories){
      error.categories="Enter some categories";
    }

    if(!values.content){
      error.content="Enter some content";
    }
    return error;
}

export default reduxForm({
  validate:validate,
  form:'PostsNewForm' //unique key for the form
})(
  connect(null,{ createPost })(PostsNew)
);
