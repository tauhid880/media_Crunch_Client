import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import "./ProfileSide.css";
import FollowersCard from "../FollowersCard/FollowersCard";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch></LogoSearch>
      <ProfileCard location="homepage"></ProfileCard>
      <FollowersCard></FollowersCard>
    </div>
  );
};

export default ProfileSide;
