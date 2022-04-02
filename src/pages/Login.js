import React from 'react';

import Header from '../shared/Header';
import { Grid, Text } from '../elements';

const Login = () => {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
      </Grid>
      <Grid padding="16px">
        <Text bold size="24px">login</Text>
        <div>id label / id input</div>
        <div>password label / password input</div>
        <div>login submit btn</div>
      </Grid>
    </React.Fragment>
  );
}

Login.defaultProps = {};

export default Login;