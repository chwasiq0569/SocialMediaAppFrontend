import * as React from "react";
import styles from "./profilecircle.module.css";

export interface ProfileCircleProps {}

const ProfileCircle: React.FC<ProfileCircleProps> = () => {
  return (
    <div className={styles.profileImgContainer}>
      <img
        className="rounded-full"
        src="/assets/images/profileimg.jpg"
        alt="Profile image"
      />
    </div>
  );
};

export default ProfileCircle;
