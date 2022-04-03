import React from 'react';
import { useHistory } from 'react-router-dom';

import { Grid, Text, Button } from '../elements';

const Header = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid width='95%' padding='16px' margin='auto' is_flex>
        <Grid>
          <Text bold size='24px'>PTree M</Text>
        </Grid>
        <Grid is_flex>
          <Button margin='10px' onClick={()=>{
            alert("로그인!");
            // history.push('/login');
          }}>로그인</Button>
          <Button>회원가입</Button>
          {/* <div>page link btn - list-object ; text, function</div> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;