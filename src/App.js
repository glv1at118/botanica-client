import React from 'react';
import Playground from './views/Playground.jsx';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/playground" component={Playground}></Route>
          <Redirect to="/playground"></Redirect>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
