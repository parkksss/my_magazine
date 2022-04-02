import React from 'react';
import Grid from '../elements/Grid';
import Text from '../elements/Text';

const Header = () => {
  return (
    <React.Fragment>
      <Grid padding='16px' is_flex>
        <Grid>
          <Text bold size='24px'>PTree M</Text>
        </Grid>
        {/* <Grid is_flex> */}
          <button>로그인</button>
          <button>회원가입</button>
          {/* <div>page link btn - list-object ; text, function</div> */}
        {/* </Grid> */}
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;