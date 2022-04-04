import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Grid, Text, Button } from '../elements';
import { getCookie, deleteCookie } from '../shared/Cookie';

const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);

  
  if(is_login){
    return (
      <React.Fragment>
        <Grid width='95%' padding='16px' margin='auto' is_flex>
          <Grid>
            <Text bold size='24px' margin='0'>PTree M</Text>
          </Grid>
          <Grid is_flex>
            <Button text='my_info'_onClick={()=>{
              alert('내정보?');
            }}></Button>
            <Button text='notice' margin='10px' _onClick={()=>{
              alert('알림창?');
            }}></Button>
            <Button text='logout' _onClick={()=>{
              dispatch(userActions.logOut({}));
            }}></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  

  return (
    <React.Fragment>
      <Grid width='95%' padding='16px' margin='auto' is_flex>
        <Grid>
          <Text bold size='24px' margin='0'>PTree M</Text>
        </Grid>
        <Grid is_flex>
          <Button text='login' margin='10px' _onClick={()=>{
            alert('로그인할까?');
          }}></Button>
          <Button text='join' _onClick={()=>{
            alert('회원가입할까?');
          }}></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;