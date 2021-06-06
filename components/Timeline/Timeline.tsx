import * as React from "react";
import styles from "./timeline.module.css";

export interface TimlineProps {}

const Timline: React.FC<TimlineProps> = () => {
  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.profileInfoSection}>
        <div className={styles.userProfile}>
          <div className={styles.profilePicContainer}>
            <img src="/assets/images/profileimg.jpg" alt="Profile Image" />
          </div>
        </div>
      </div>
      <div className={styles.timeline}></div>
      <div className={styles.suggestionsAndEvents}></div>
    </div>
  );
};

export default Timline;
