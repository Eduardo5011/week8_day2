import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Page2 from './views/Page2';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Routes>
          <Route  path = '/' element={<Home />}/>
          <Route  path = '/page2' element={<Page2 />}/>
        </Routes>
      </div>
    )
  }
}

