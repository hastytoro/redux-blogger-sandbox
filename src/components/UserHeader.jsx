import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

const UserHeader = (props) => {
  // console.log("props: ", props);
  useEffect(() => {
    props.fetchPostsAndUsers(props.userId);
  }, []);
  const { user } = props;
  if (!user) return null;
  return <div className="header">{user.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
  // console.log("redux state: ", state);
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(UserHeader);
