import React from 'react';
import {Grid, Text, Button, Image, Input} from '../elements';

const Posting = (props) => {
  return (
    <React.Fragment>
      <Grid padding='16px'>
        <Text bold size='36px'>게시글 작성</Text>
        <input type='file'/>
      </Grid>
      <Grid>
        <Grid padding='16px'>
          <Text margin='0' size='24px' bold>미리보기</Text>
        </Grid>
        <Image shape='rectangle' />
      </Grid>
      <Grid padding='16px'>
        <Input label='게시글 내용' placeholder='게시글 작성' multiLine/>
      </Grid>
      <Grid padding='16px'>
        <Button text='게시글작성'></Button>
      </Grid>
    </React.Fragment>
  );
}

export default Posting;