import React, { useEffect } from "react";
import "./Posts.css";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../Actions/PostAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  return (
    <div className="Posts">
      {loading
        ? "Load the posts..."
        : posts.map((data, id) => {
            return <Post data={data} id={id}></Post>;
          })}
    </div>
  );
};

export default Posts;
