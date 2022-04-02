import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Magazine from '../pages/Magazine';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/">
          <Magazine/>
        </Route>
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
