import React from "react";
import styles from "./suggestion.module.css";

export interface SuggestionsProps {}

const Suggestions: React.SFC<SuggestionsProps> = () => {
  return (
    <div className={styles.suggestionsContainer}>
      <p className={styles.suggestionsHeading}>Suggested for You</p>
      <div className={styles.suggestedProfile}>
        <div className={styles.profileContainer}>
          <img
            className="rounded-full"
            src="/assets/icons/l60Hf.png"
            alt="profile pic"
          />
        </div>

        <p className={styles.profileName}>Wasiq Abdullah</p>
        <p className={styles.followers}>Followers: 46</p>
        <p className={styles.follow}>Follow</p>
      </div>
    </div>
  );
};

export default Suggestions;
