import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import Post from './components/post';

class App extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Post />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
