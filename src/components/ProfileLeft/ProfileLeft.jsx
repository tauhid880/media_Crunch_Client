import React from "react";

import LogoSearch from "../LogoSearch/LogoSearch";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch></LogoSearch>
      <InfoCard></InfoCard>
      <FollowersCard></FollowersCard>
    </div>
  );
};

export default ProfileLeft;
