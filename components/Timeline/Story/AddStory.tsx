import React from "react";
import styles from "../timeline.module.css";
import { BsPlus } from "react-icons/bs";

export interface AddStoryProps {}

const AddStory: React.SFC<AddStoryProps> = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/images/profileimg.jpg")',
      }}
      className={styles.storyContainer + " rounded-md"}
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
  );
};

export default AddStory;
