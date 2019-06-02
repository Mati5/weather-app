import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Settings from './containers/Settings/Settings';
import Cities from './containers/Cities/Cities';
import City from './containers/City/City';

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path="/settings" component={Settings} />
        <Route path="/:name" component={City} />
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
