import React, { Component } from 'react';
import { rejectResults } from '../actions/actions.js';
import { SchoolChildItem } from '../presentational/SchoolChildItem';

class SchoolItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: null
    };
  }

  componentDidMount() {
    fetch(`/schools/${this.props.match.params.school}`, {
      method: "GET",
      headers: new Headers({
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      })
    })
    .then(response => response.json())
    .then(json => this.setState({school: json[0]}))
    .catch(err => this.props.dispatch(rejectResults(err)));
  }

  render() {
    return(<SchoolChildItem school={this.state.school} />)
  }
}

export default SchoolItem;