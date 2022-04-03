import React from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Text, Button } from '../elements';

const Header = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid width='95%' padding='16px' margin='auto' is_flex>
        <Grid>
          <Text bold size='24px' margin='0'>PTree M</Text>
        </Grid>
        <Grid is_flex>
          <Button text='login' margin='10px' _onClick={()=>{
            alert('로그인할까?');
            // history.push('/login');
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