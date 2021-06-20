import * as React from "react";
import styles from "./post.module.css";
import { AiFillFire, AiOutlineConsoleSql } from "react-icons/ai";
import { MdBookmark } from "react-icons/md";
import { format } from "timeago.js";
import axios from "axios";

export interface PostProps {
  post: {
    createdAt: string;
    desc: string;
    likes: [string];
    updatedAt: string;
    userId: string;
    _id: string;
    image: string;
  };
}

interface UserTypes {
  user: {
    createdAt: string;
    email: string;
    followers: [string];
    followings: [string];
    isAdmin: boolean;
    profilePicture: string;
    username: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [user, setUser] = React.useState<UserTypes | {}>({});
  const [image, setImage] = React.useState<String>("");

  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/api/user/${post.userId}`)
      .then((user) => setUser(user.data));

    setImage("http://localhost:8080/postImages/" + post.image);
  }, []);

  const likePost = () => {
    axios
      .put(`http://localhost:8080/api/post/${post._id}/like`)
      .then((data) => console.log(data));
  };

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
            <p className={styles.userDisplayName}>{user && user?.username}</p>
            <p className={styles.timeStamp}>{format(post?.createdAt)}</p>
          </div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
      <div className={styles.postCaption}>{post.desc}</div>
      <div className={styles.postedImageContainer}>
        <img
          src={post?.image ? image : "/assets/images/postimg.jpg"}
          alt="Posted Image"
        />
      </div>
      <div className={styles.reactionsContainer}>
        <div className={styles.reactionsIcons}>
          <div className={styles.reactIconContainer} onClick={likePost}>
            <AiFillFire className={styles.reactionIconStyles} />
            <p>{post?.likes.length}</p>
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
