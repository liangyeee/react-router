import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';


import List1 from './Content/List1/index';
import List2 from './Content/List2/index';
import List3 from './Content/List3/index';
import List4 from './Content/List4/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.showOther = this.showOther.bind(this);
  }

  showOther() {
    return <div> render other </div>
  }

  render() {
    const history = createBrowserHistory();
    return (
      <div className="App">
        <Router history={history}>
          <>
          <div className="left">
              <ul>
                <li><Link to="/">第一个List</Link></li>
                <li><Link to="/List2">第二个List</Link></li>
                <li><Link to="/List3">第三个List</Link></li>
                <li><Link to="/List4">第四个List</Link></li>
              </ul>
            </div>
            <div className="right">
            <Switch>
                <Route path="/" exact component={List1} />
                <Route path="/List2" component={List2} />
                <Route path="/List3" component={List3} />
                <Route path="/List4" component={List4} />
            </Switch>
            </div>
          </>
        </Router>
      </div>
    );
  }
}

