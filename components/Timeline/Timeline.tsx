import React from "react";
import Stories from "../Stories/Stories";
import CreatePostField from "./CreatePostField/CreatePostField";
import Post from "./Post/Post";
import Suggestions from "./Suggestions/Suggestion";
import styles from "./timeline.module.css";

export interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = () => {
  return (
    <div className={"px-2 flex justify-between " + styles.timeLineContainer}>
      <div className={styles.followersSection}>
        <div className={styles.followerProfile + " flex items-center"}>
          <img
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="profile Image"
          />
          <span>Eleanor Pena</span>
        </div>
        <div className={styles.followerProfile + " flex items-center"}>
          <img
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="profile Image"
          />
          <span>Eleanor Pena</span>
        </div>
        <div className={styles.followerProfile + " flex items-center"}>
          <img
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="profile Image"
          />
          <span>Eleanor Pena</span>
        </div>
        <div className={styles.followerProfile + " flex items-center"}>
          <img
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="profile Image"
          />
          <span>Eleanor Pena</span>
        </div>
        <div className={styles.followerProfile + " flex items-center"}>
          <img
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="profile Image"
          />
          <span>Eleanor Pena</span>
        </div>
        <div className={styles.followerProfile + " flex items-center"}>
          <img
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="profile Image"
          />
          <span>Eleanor Pena</span>
        </div>
      </div>
      <div className={styles.leftSide}>
        <Stories />
        <CreatePostField />
        <Post />
        <Post />
        <Post />
      </div>
      <div className={styles.rightSide}>
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
