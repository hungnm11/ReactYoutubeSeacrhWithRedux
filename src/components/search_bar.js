import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';

class SearchBar extends Component {
  render() {
    console.log('PROPS', this.props.fetchData('surfboards'))
    return (
      <div className="row">
        <div className="col">
          <form className="input-group">
            <input className="form-control" />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Search</button>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);