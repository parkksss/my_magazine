import React from 'react';

import Header from '../shared/Header';
import { Grid, Text, Input, Button } from '../elements';
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';

const Login = (props) => {
  console.log(getCookie('user_pwd'));
  const login = () => {
    setCookie('user_id', 'perl', 3);
    setCookie('user_pwd', 'pppp', 3);
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
        <Button text='log_in' border='none' bg='#212121' color='#fff'_onClick={login
        }>login submit btn</Button>
      </Grid>
    </React.Fragment>
  );
}

Login.defaultProps = {};

export default Login;