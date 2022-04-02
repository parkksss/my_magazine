import React from 'react';
import Grid from '../elements/Grid';
import Header from '../shared/Header';

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