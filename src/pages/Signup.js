import React from 'react';

import Header from '../shared/Header';
import { Grid, Text, Input, Button } from '../elements';

const Signup = (props) => {
  return (
    <React.Fragment>
      <Grid width='95%' padding='16px' margin='auto'>
        <Text bold size="32px">join</Text>
        <Grid padding='16px 0 0'>
          <Input label='ID' placeholder='Enter your ID.' _onChange={() => {
            console.log('아이디 입력했어!');
          }}/>
        </Grid>
        <Grid padding='16px 0 0'>
          <Input label='Nickname' placeholder='Enter your nickname.' _onChange={() => {
            console.log('닉네임 입력했어!');
          }}/>
        </Grid>
        <Grid padding='16px 0 0'>
          <Input label='Password' placeholder='Enter your password.' _onChange={() => {
            console.log('비밀번호 입력했어!');
          }}/>
        </Grid>
        <Grid padding='16px 0 25px'>
          <Input label='Password check' placeholder='Enter your password again.' _onChange={() => {
            console.log('비밀번호 확인했어!');
          }}/>
        </Grid>
        <Button text='sign_up' border='none' bg='#212121' color='#fff'_onClick={() => {
          console.log('회원가입했어!');
        }}>login submit btn</Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;