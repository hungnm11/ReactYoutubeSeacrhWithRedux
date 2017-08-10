import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { fetchData } from '../actions/index';

class SearchBar extends Component {

  renderField(field) {
    return (
      <div>
      <input
        {...field.input}
        className="form-control" 
        type={field.type}
        placeholder={field.placeholder}
      />
      <span>
        {field.meta.touched ? field.meta.error : ''}
      </span>
      </div>
    );
  }

  onSubmitForm(event) {
    console.log('Event', event);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <div className="col">
          <form className="input-group" onSubmit={handleSubmit(this.onSubmitForm)} >
            <Field 
              name="searchField"
              component={this.renderField}
              type="text"
              placeholder="Enter a keyword"
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Search</button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.searchField) {
    errors.searchField = "Please enter a keyword";
  }

  return errors;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchData }, dispatch);
}

export default reduxForm({
  validate,
  form: 'searchForm'
})(connect(null, mapDispatchToProps)(SearchBar));