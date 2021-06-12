import * as React from "react";
import styles from "./post.module.css";
import { AiFillFire } from "react-icons/ai";
import { MdBookmark } from "react-icons/md";

export interface PostProps {}

const Post: React.SFC<PostProps> = () => {
  return (
    <div className={styles.postContainer + " rounded-md"}>
      <div className={styles.postHeader}>
        <div className={styles.postHeaderleftSide}>
          <div className={styles.profilePicContainer}>
            <img
              className="rounded-full"
              src="/assets/images/profileimg.jpg"
              alt="Profile image"
            />
          </div>
          <div className={styles.postCreatorInfo}>
            <p className={styles.userDisplayName}>Wasiq Abdullah</p>
            <p className={styles.timeStamp}>Thu 12:45 AM</p>
          </div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
      <div className={styles.postCaption}>
        This is the Post Caption Section Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Assumenda aperiam laboriosam dignissimos sunt
        aspernatur, maxime asperiores voluptatibus distinctio eligendi non
        necessitatibus, pariatur!
      </div>
      <div className={styles.postedImageContainer}>
        <img src="/assets/images/postimg.jpg" alt="Posted Image" />
      </div>
      <div className={styles.reactionsContainer}>
        <div className={styles.reactionsIcons}>
          <div className={styles.reactIconContainer}>
            <AiFillFire className={styles.reactionIconStyles} />
            <p>24</p>
          </div>
          <div className={styles.reactIconContainer}>
            <MdBookmark className={styles.reactionIconStyles} />
            <p>24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
