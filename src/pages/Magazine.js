//Magazine.js
import React from 'react';
import Post from '../components/Post';

import {useSelector} from "react-redux";

const Magazine = (props) => {
  const post_list = useSelector((state) => state.post.list);

  // console.log(post_list)
  return (
    <React.Fragment>
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p}/>
        })}
    </React.Fragment>
  );

}

export default Magazine;