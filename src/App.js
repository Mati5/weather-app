import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import Cities from './containers/Cities/Cities';

const asyncCity = asyncComponent(() => {
  return import('./containers/City/City');
}); 

const asyncSettings = asyncComponent(() => {
  return import('./containers/Settings/Settings');
})

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/settings" component={asyncSettings} />
        <Route path="/:name" component={asyncCity} />
        <Route path="/" exact component={Cities} />
        <Redirect to="/cities" />
      </Switch>
    )

    return(
        <Layout>
            {routes}
        </Layout>
    );
  }
}

export default App;
