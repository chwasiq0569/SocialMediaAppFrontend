import * as React from "react";
import styles from "./stories.module.css";

export interface StoryProps {}

const Story: React.SFC<StoryProps> = () => {
  return (
    <div className={styles.circle}>
      <img
        src="https://en.gravatar.com/userimage/8283692/4c9d9ec1cd3fd02acb5ac9572e3583da?size=200"
        alt=""
      />
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" />
      </svg>
    </div>
  );
};

export default Story;
