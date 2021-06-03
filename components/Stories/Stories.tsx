import * as React from "react";
import styles from "./stories.module.css";
import Story from "./Story";

export interface StoriesProps {}

const Stories: React.FC<StoriesProps> = () => {
  return (
    <div className={styles.storiesContainer}>
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default Stories;
