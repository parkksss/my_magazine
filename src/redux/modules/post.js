import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
  list: [],
}

const initialPost = {
  user_info: {
    id: 0,
    user_name: 'yesleee',
    user_profile: 'https://user-images.githubusercontent.com/91959791/161682922-347edc18-3711-4108-b9d1-26b51a41447c.jpg',
  },
  image_url: 'https://user-images.githubusercontent.com/91959791/161682922-347edc18-3711-4108-b9d1-26b51a41447c.jpg',
  contents: '베리베리냠냠',
  comment_cnt: 10,
  insert_dt: '2021-02-27 10:00:00',
};

// reducer
export default handleActions(
  {
      [SET_POST]: (state, action) => produce(state, (draft) => {
        
      }),

      [ADD_POST]: (state, action) => produce(state, (draft) => {
          
      })
  },
  initialState
);

// action creator export
const actionCreators = {
  setPost,
  addPost,
};

export { actionCreators };