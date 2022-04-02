import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Magazine from '../pages/Magazine';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from '../components/Header';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/">
          <Magazine/>
        </Route>
      </BrowserRouter>
      <Header></Header>
      <BrowserRouter>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
      </BrowserRouter>
    </React.Fragment>
    );
}

export default App;
