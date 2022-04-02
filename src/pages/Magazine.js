import React from 'react';
import Header from '../shared/Header';

import { Grid, Text } from '../elements';

const Magazine = (props) => {

  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
      </Grid>
      <Grid padding="16px">
        Magazine
      </Grid>
    </React.Fragment>
  );

};

export default Magazine;