import React from 'react';
import Header from '../shared/Header';

import { Grid, Text } from '../elements';

const Magazine = (props) => {

  return (
    <React.Fragment>
      <Grid width='95%' padding='16px' margin='auto'>
        <div>profile / nickname / date / fix-btn</div>
        <div>content</div>
        <div>image</div>
        <div>comment count</div>
      </Grid>
    </React.Fragment>
  );

};

Magazine.defaultProps = {
  user_info: {
    user_name: 'yesleee',
    user_profile: 'https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg',
  },
  image_url: 'https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg',
  contents: '고양이네요!',
  comment_cnt: 10,
  insert_dt: '2021-02-27 10:00:00',
};

export default Magazine;