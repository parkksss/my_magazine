import React from 'react';

import Header from '../shared/Header';
import { Grid, Text, Input } from '../elements';

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
      </Grid>
      <Grid padding="16px">
        <Text bold size="32px">login</Text>
        <Input/>id label / id input
        <Input/>password label / password input
        <div>login submit btn</div>
      </Grid>
    </React.Fragment>
  );
}

Login.defaultProps = {};

export default Login;