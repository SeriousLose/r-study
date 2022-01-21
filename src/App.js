import React from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import './App.css';
import routes from './core/router/router';
import logo from './logo.svg';

function RouteWithSubRoutes (route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


function App () {

  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/list">文章列表页</Link>
            </li>
            <li>
              <Link to="/">首页</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>

      <header className="App-header">
        {/* <ArticleList /> */}
        {/* <Article /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
