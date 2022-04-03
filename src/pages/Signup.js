import React from 'react';

import Header from '../shared/Header';
import { Grid, Text } from '../elements';

const Signup = (props) => {
  return (
    <React.Fragment>
      {/* <Grid>
        <Header></Header>
      </Grid> */}
      <Grid padding="16px">
        <Text bold size="24px">join</Text>
        <div>id label / id input</div>
        <div>nickname label / nickname input</div>
        <div>password label / password input</div>
        <div>password check label / password check input</div>
        <div>signup submit btn</div>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;