import React from "react";
import ProfileBar from "./ProfileBar";
import styles from "../timeline.module.css";

export interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <div className={styles.userProfile + " rounded-r-lg"}>
      <ProfileBar />
    </div>
  );
};

export default UserProfile;
