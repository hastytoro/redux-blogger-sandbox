import jsonPlaceholder from "../apis/jsonPlaceholder";

/*
! Warning: Breaking Action Creator Rules
Uncaught Error: Actions must be plain objects.
Instead, the actual type was: 'Promise'.
You may need to add middleware to your store setup to handle dispatching other -
values, such as 'redux-thunk' to handle dispatching functions.

> Use custom middleware for async actions.

The above is not bad because we're using bad design or wrote code incorrectly -
or anything like that. It is bad because we are breaking the Redux rules.
We are specifically breaking the rules of an action creator.

*/

export const fetchPosts = async () => {
  const response = await jsonPlaceholder.get("./posts");
  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
