import React from 'react';

import Header from '../shared/Header';
import { Grid, Text, Input, Button } from '../elements';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Signup = (props) => {

  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [user_name, setUserName] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwd_check, setPwdCheck] = React.useState('');

  const signup = () => {
    if (id === '' | user_name === '' | pwd === '' | pwd_check === '') {
      return;
    };
    if (pwd !== pwd_check) {
      return;
    };
    dispatch(userActions.signupFB(id, pwd, user_name));
  };

  return (
    <React.Fragment>
      <Grid width='95%' padding='16px' margin='auto'>
        <Text bold size="32px">join</Text>
        <Grid padding='16px 0 0'>
          <Input label='ID' placeholder='Enter your ID.' _onChange={(e) => {
            setId(e.target.value);
          }}/>
        </Grid>
        <Grid padding='16px 0 0'>
          <Input label='Nickname' placeholder='Enter your nickname.' _onChange={(e) => {
            setUserName(e.target.value);
          }}/>
        </Grid>
        <Grid padding='16px 0 0'>
          <Input label='Password' placeholder='Enter your password.' _onChange={(e) => {
            setPwd(e.target.value);
          }}/>
        </Grid>
        <Grid padding='16px 0 25px'>
          <Input label='Password check' placeholder='Enter your password again.' _onChange={(e) => {
            setPwdCheck(e.target.value);
          }}/>
        </Grid>
        <Button text='sign_up' border='none' bg='#212121' color='#fff'_onClick={() => {
          signup();
        }}></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;