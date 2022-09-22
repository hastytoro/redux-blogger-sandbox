import React, { useEffect } from "react";

import UserHeader from "./UserHeader";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

/*
Diagram: Redux flow (updated)
Component get initial render to screen (mounting phase)
- A lifecycle or effect hook executes action creators

The action creators (fetchPosts/fetchUser) initialize with default values
> But when action creator is invoked by connected (connect) "consumer" component
> A consumer uses the (connect) function that takes our action creator as second argument
> connect(mapStateToProps, { here })(component)
> The action creator makes the API request (redux-thunk) handles async operation)
> The action creator with (redux-thunk) can dispatch to Redux reducers actions directly.

Our action creator dispatch to the reducers
Reducers take an action and match by action.type to return needed action.payload
and any additional operation needed on that data before returned.
- New state will re-render adjacent components
*/

const PostList = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  const renderList = () => {
    return props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };
  return <div className="ui relaxed divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
