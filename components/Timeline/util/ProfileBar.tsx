import React from "react";
import styles from "../timeline.module.css";

export interface ProfileBarProps {}

const ProfileBar: React.FC<ProfileBarProps> = () => {
  return (
    <>
      <div className={styles.profilePicContainer}>
        <img
          className="rounded-full"
          src="/assets/images/profileimg.jpg"
          alt="Profile Image"
        />
      </div>
      <p className={styles.userFullName}>Wasiq Abdullah</p>
    </>
  );
};

export default ProfileBar;
