import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
How redux-thunk works under the hood:

> Action creators - produce an object or function . . .
> dispatch - that forwards the action.type and payload to all . . .
> redux-thunk - determines if the object is an action or a function  . . .
- - - - - -
If just an action object, nothing additional is done different. It doesn't care
to deal with it at all. The object gets passed along to all our reducers.
But if we return a function instead an alternate flow is followed. The function
is invoked and passed dispatch and getState as arguments. We dispatch from our
function, sending actions to all middleware, eventually forwarded to our reducers.
- - - - - -

> reducers - that in turn create new state for our component . . .
> store - thats the end of cycle . . .
*/

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("./posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};
