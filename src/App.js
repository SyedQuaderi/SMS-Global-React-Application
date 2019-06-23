import React from 'react';
import './App.css';
import Routers from './components/Routers';
import Main from './components/Main';
import ApiStore from './components/ApiStore';
import { Route, Link } from 'react-router-dom';
import SmsPage from './components/SmsPage';
import Navigation from './components/Navigation';

const App = (props) => (
  <div className='app'>
    <Main>
      {props.children}
    </Main>
  </div>
);

export default App;