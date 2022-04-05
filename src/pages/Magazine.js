import React from 'react';
import Header from '../shared/Header';

import { Grid, Text, Image } from '../elements';

const Magazine = (props) => {

  return (
    <React.Fragment>
      {/* <Grid width='95%' padding='16px' margin='auto'> */}
      <Grid>
        <Grid width='95%' padding='16px 16px 0' margin='auto'>
          <Grid is_flex>
            <Image shape='circle' src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
            <Text>{props.insert_dt}</Text>
          </Grid>
          <Grid>  
            <Text>{props.contents}</Text>
          </Grid>
        </Grid>
        <Grid>
          <Image shape='rectangle' src={props.src} />
        </Grid>
        <Grid width='95%' padding='0 16px' margin='auto'>
          <Text bold>댓글 {props.comment_cnt}개</Text>        
        </Grid>
      </Grid>
    </React.Fragment>
  );

};

Magazine.defaultProps = {
  user_info: {
    user_name: 'yesleee',
    user_profile: 'https://user-images.githubusercontent.com/91959791/161682922-347edc18-3711-4108-b9d1-26b51a41447c.jpg',
  },
  image_url: 'https://user-images.githubusercontent.com/91959791/161682922-347edc18-3711-4108-b9d1-26b51a41447c.jpg',
  contents: '고양이네요!',
  comment_cnt: 10,
  insert_dt: '2021-02-27 10:00:00',
};

export default Magazine;