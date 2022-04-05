import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";

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

// middleware
const getPostFB = () => {
  return function (dispatch, getState, { history }) { 
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {

        let _post = {
          id: doc.id,
          ...doc.data()
        };

        let post = {
          id: doc.id,
          user_info: {
              user_name: _post.user_name,
              user_profile: _post.user_profile,
              user_id: _post.user_id,
          },
          contents: _post.contents,
          image_url: _post.image_url,
          comment_cnt: _post.comment_cnt,
          imsert_dt: _post.insert_dt
        };
        // 다른방법
        // let _post = doc.data();
        // let post = Object.keys(_post).reduce((acc, cur)=>{
        //   if(cur.indexOf('user_') !== -1){
        //     return {
        //       ...acc, 
        //       user_info: {...acc.user_info, [cur]: _post[cur]}
        //     };
        //   }
        //   return {...acc, [cur]: _post[cur]};
        // }, {id: doc.id, user_info: {}});

        post_list.push(post);
      });
      console.log(post_list);
      dispatch(setPost(post_list));
    })
  } 
}

// reducer
export default handleActions(
  {
      [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;
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
  getPostFB,
};

export { actionCreators };