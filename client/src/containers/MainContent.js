import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../presentational/Home';
import Schools from './Schools';
import SchoolItem from './SchoolItem';
import { Blog } from '../presentational/Blog';

class MainContent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/#h-whyabroad" component={Home} />
        <Route path="/#h-howitworks" component={Home} />
        <Route path="/#h-pricing" component={Home} />
        <Route path="/schools/:school" render={props => ( 
          <SchoolItem {...props} />
        )} />
        <Route path="/schools" component={Schools} />
        <Route path="/blog" component={Blog} />
      </Switch>
    )
  }
}

export default MainContent;