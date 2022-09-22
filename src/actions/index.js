import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
/*
How redux-thunk works under the hood:
> Action creators - produce an object or function . . .
> dispatch - that forwards the `action.type` and `payload` to all . . .
> redux-thunk - determines if the object is an `action` or a function  . . .
- - - - - -
If just an `action` object, nothing additional is done different. It doesn't care
to deal with it at all. The object that showed up gets passed along to all our reducers.

if we return a `function` instead an alternate flow is followed. The function is
invoked and passed `dispatch` and `getState` as arguments. The `dispatch` from within
our function, we can send `action` to all middleware(s), eventually forwarding it to our reducers.
- - - - - -
> reducers - that in turn creates new `state` for our component in the. . .
> store - thats the end of cycle . . .
*/

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
});
