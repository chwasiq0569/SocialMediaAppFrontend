import * as React from "react";
import styles from "../timeline.module.css";

export interface FollowerStoryProps {}

const FollowerStory: React.FC<FollowerStoryProps> = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/images/postimg.jpg")',
      }}
      className={`${styles.storyContainer} ${styles.followerStory} rounded-md`}
    >
      <div className={styles.followerProfileStory}>
        <div className={styles.followerProfileImgWrapper + " rounded-full"}>
          <img className="rounded-full" src="/assets/images/profileimg.jpg" />
        </div>
        <p>Wasiq Abdullah</p>
      </div>
      <div className={styles.dullStoryWrapper + " rounded-lg"}></div>
    </div>
  );
};

export default FollowerStory;
