import * as React from "react";
import ProfileBar from "./ProfileBar";
import styles from "../timeline.module.css";

export interface FollowerProfileProps {}

const FollowerProfile: React.FC<FollowerProfileProps> = () => {
  return (
    <div className={styles.followerProfile + " rounded-r-lg"}>
      <ProfileBar />
    </div>
  );
};

export default FollowerProfile;
