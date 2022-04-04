import React from 'react';
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

import Header from '../shared/Header';
import { Grid, Text, Input, Button } from '../elements';
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

const Login = (props) => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(userActions.loginAction({user_name: "perl"}));
  };
  return (
    <React.Fragment>
      <Grid width='95%' padding='16px' margin='auto'>
        <Text bold size="32px">login</Text>
        <Grid padding='16px 0 0'>
          <Input label='ID' placeholder='Enter your ID.' _onChange={() => {
            console.log('아이디 입력했어!');
          }}/>
        </Grid>
        <Grid padding='16px 0 25px'>
          <Input label='Password' placeholder='Enter your password.' _onChange={() => {
            console.log('비밀번호 입력했어!');
          }}/>
        </Grid>
        <Button text='log_in' border='none' bg='#212121' color='#fff'_onClick={() => {
          console.log('로그인했어!');
          login();
        }}>login submit btn</Button>
      </Grid>
    </React.Fragment>
  );
}

Login.defaultProps = {};

export default Login;