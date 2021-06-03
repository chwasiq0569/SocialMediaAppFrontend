import * as React from "react";
import styles from "./post.module.css";
import { AiFillFire } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";

export interface PostProps {}

const Post: React.FC<PostProps> = () => {
  const reactionsIconsStyles = {
    fontSize: "1.2rem",
    color: "#b9b9b9",
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader + " flex items-center"}>
        <div className={styles.userProfileContainer}>
          <img
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="User Profile Img"
          />
        </div>
        <div className={styles.userInfo}>
          <p className={styles.userName}>Dummy User</p>
          <p className={styles.postTimeStamp}>Yesterday 12:55</p>
        </div>
      </div>
      <div className={styles.postContent}>
        <div className={styles.postCaption}>
          Hey Guys! This is my First Post
        </div>
        <div className={styles.postImgContainer}>
          <img src="/assets/images/postimg.jpg" alt="Post Image" />
        </div>
        <div className={styles.reactionsContainer}>
          <div className={styles.reactionIcons}>
            <div className={styles.iconsContianer}>
              <AiFillFire style={reactionsIconsStyles} />
              <span className={styles.reactionCount}>24</span>
            </div>
            <div className={styles.iconsContianer}>
              <RiShareForwardFill style={reactionsIconsStyles} />
              <span className={styles.reactionCount}>24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
