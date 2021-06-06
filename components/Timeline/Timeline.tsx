import * as React from "react";
import styles from "./timeline.module.css";
import FollowerProfile from "./util/FollowerProfile";
import ProfileBar from "./util/ProfileBar";
import UserProfile from "./util/UserProfile";
import { BsPlus } from "react-icons/bs";

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
        <div className={styles.storiesContainer + " flex"}>
          <div
            style={{
              backgroundImage: 'url("/assets/images/profileimg.jpg")',
            }}
            className={styles.storyContainer + " rounded-lg"}
          >
            <div className={styles.addStory}>
              <div className={styles.addStoryBtn}>
                <div className={styles.addBtnContainer + " rounded-full"}>
                  <BsPlus className={styles.addBtnIcon + " rounded-full"} />
                </div>
                <p>Add Story</p>
              </div>
            </div>
            <div className={styles.dullStoryWrapper + " rounded-lg"}></div>
          </div>
          <div
            style={{
              backgroundImage: 'url("/assets/images/postimg.jpg")',
            }}
            className={`${styles.storyContainer} ${styles.followerStory} rounded-lg`}
          >
            <div className={styles.followerProfileStory}>
              <div
                className={styles.followerProfileImgWrapper + " rounded-full"}
              >
                <img
                  className="rounded-full"
                  src="/assets/images/profileimg.jpg"
                />
              </div>
              <p>Wasiq Abdullah</p>
            </div>
            <div className={styles.dullStoryWrapper + " rounded-lg"}></div>
          </div>
        </div>
      </div>
      <div className={styles.suggestionsAndEvents}></div>
    </div>
  );
};

export default Timline;
