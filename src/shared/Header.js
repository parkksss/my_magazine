import React from 'react';
import Grid from '../elements/Grid';

const Header = () => {
  return (
    <React.Fragment>
      <Grid padding='16px' is_flex='true'>
        <div>home logo</div>
        <div>page link btn - list-object ; text, function</div>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;