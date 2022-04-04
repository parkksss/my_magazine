import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

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
        <ConnectedRouter history={history}>
          <Route path="/" exact>
            <Magazine/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/signup" exact>
            <Signup/>
          </Route>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
    );
}

export default App;
