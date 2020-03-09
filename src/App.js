import React from 'react';
import './styles/app.css';
import Playground from './views/Playground.jsx';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/playground/" component={Playground}></Route>
          <Redirect to="/playground/"></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
