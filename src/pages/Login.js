import React from 'react';

import Header from '../shared/Header';
import { Grid, Text, Input, Button } from '../elements';

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
      </Grid>
      <Grid padding="16px">
        <Text bold size="32px">login</Text>
        <Grid padding='16px 0'>
          <Input label='아이디' placeholder='아이디를 입력해주세요' _onChange={() => {
            console.log('아이디 입력했어!');
          }}/>
        </Grid>
        <Grid padding='16px 0'>
          <Input label='비밀번호' placeholder='비밀번호를 입력해주세요' _onChange={() => {
            console.log('비밀번호 입력했어!');
          }}/>
        </Grid>
        <Button text='로그인하기' border='none' bg='#212121' color='#fff'_onClick={() => {
          console.log('로그인했어!');
        }}>login submit btn</Button>
      </Grid>
    </React.Fragment>
  );
}

Login.defaultProps = {};

export default Login;