import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { reduxStore } from './redux/store.js';

const myRender = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

myRender();

reduxStore.subscribe(myRender);