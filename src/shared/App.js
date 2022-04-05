import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

import {apiKey} from "./firebase";

import Magazine from '../pages/Magazine';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from './Header';
import { Grid } from '../elements' 

function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);
  
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
