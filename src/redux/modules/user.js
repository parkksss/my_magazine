import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from '../../shared/firebase';
import { getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// actions
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

// action creators
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginCheckFB = () => {
  return function (dispatch, getState, {history}) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          user_name: user.displayName,
          id: user.email,
          user_profile: '',
          uid: user.uid,
        }));
        // ...
      } else {
        dispatch.logOut();
        // ...
      }
    });
  }  
};

const loginFB = (id, pwd) => {
  return function (dispatch, getState, {history}) {
    // const auth = getAuth();

    setPersistence(auth, browserSessionPersistence)
      .then((res) => {
        signInWithEmailAndPassword(auth, id, pwd)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch(setUser({
              user_name: user.displayName,
              id: id,
              user_profile: '',
              uid: user.uid,
            }));
            history.push('/');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

  }
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, {history}) {
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, id, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: user_name
        }).then(() => {
          dispatch(setUser({user_name: user_name, id: id, user_profile: '', uid: user.uid}));
          history.push('/');
        }).catch((error) => {
          console.log(error);
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
};


// reducer 
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
				draft.is_login = true;
      }),
		[LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
				draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  setUser,
  logOut,
  getUser,
  loginFB,
  signupFB,
  loginCheckFB,
};

export { actionCreators };