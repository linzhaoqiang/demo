import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import List from './routes/List';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/*<Route path="/list" exact component={IndexPage} />*/}
        <Route path="/" exact component={List} />
      </Switch>
    </Router>
  );
}


export default RouterConfig;
