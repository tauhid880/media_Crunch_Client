import React from "react";
import "./Profile.css";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/profileCard/ProfileCard";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft></ProfileLeft>
      <div className="profile-center">
        <ProfileCard location="profilePage"></ProfileCard>
        <PostSide></PostSide>
      </div>
      <RightSide></RightSide>
    </div>
  );
};

export default Profile;
