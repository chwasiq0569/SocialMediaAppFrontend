import * as React from "react";
import styles from "./timeline.module.css";
import FollowerProfile from "./util/FollowerProfile";
import UserProfile from "./util/UserProfile";
import FollowerStory from "./Story/FollowerStory";
import AddStory from "./Story/AddStory";
import { HiEmojiHappy } from "react-icons/hi";
import { IoMdImage } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";

import Post from "./Post/Post";

export interface TimlineProps {}

const Timline: React.FC<TimlineProps> = () => {
  const [postText, setPostText] = React.useState("");

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
        {/*  */}
        <div className={styles.uploadStatusContainer + " rounded-md"}>
          <div className={styles.profilePicContainer}>
            <img
              className="rounded-full"
              src="/assets/images/profileimg.jpg"
              alt="Profile image"
            />
          </div>
          <textarea
            className="rounded-lg"
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Wasiq, what's the latest?"
          ></textarea>
          <div className={styles.createPostIconsContainer}>
            <HiEmojiHappy className={styles.createPostIconsStyles} />
            <IoMdImage className={styles.createPostIconsStyles} />
            <IoSendSharp className={styles.createPostIconsStyles} />
          </div>
        </div>
        {/*  */}
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className={styles.suggestionsAndEvents}></div>
    </div>
  );
};

export default Timline;
