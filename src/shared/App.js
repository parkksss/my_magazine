import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Magazine from '../pages/Magazine';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from './Header';
import { Grid } from '../elements' 

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Route path="/" exact>
            <Magazine/>
          </Route>
        </BrowserRouter>
        <BrowserRouter>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </BrowserRouter>
      </Grid>
    </React.Fragment>
    );
}

export default App;
