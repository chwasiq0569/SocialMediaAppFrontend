import * as React from "react";
import styles from "./timeline.module.css";
import FollowerProfile from "./util/FollowerProfile";
import ProfileBar from "./util/ProfileBar";
import UserProfile from "./util/UserProfile";
import FollowerStory from "./Story/FollowerStory";
import AddStory from "./Story/AddStory";

export interface TimlineProps {}

const Timline: React.FC<TimlineProps> = () => {
  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.profileInfoSection}>
        <UserProfile />
        <div className={styles.followersContainer + " rounded-r-lg"}>
          <div className={styles.followersTitleSection}>
            <p className={styles.followersText}>Followers</p>
            <p className={styles.allLink}>All</p>
          </div>
          <div className={styles.followersGrid}>
            <FollowerProfile />
            <FollowerProfile />
            <FollowerProfile />
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles.storiesContainer}>
          <div className={styles.innerStoriesContainer}>
            <AddStory />
            <FollowerStory />
            <FollowerStory />
            <FollowerStory />
            <FollowerStory />
            <FollowerStory />
            <FollowerStory />
            <FollowerStory />
            <FollowerStory />
            <FollowerStory />
          </div>
        </div>
      </div>
      <div className={styles.suggestionsAndEvents}></div>
    </div>
  );
};

export default Timline;
