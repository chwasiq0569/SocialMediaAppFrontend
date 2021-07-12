import * as React from "react";
import styles from "./loaderprogress.module.css";

import Loader from "react-loader-spinner";

export interface LoaderProps {}

const LoaderProgress: React.SFC<LoaderProps> = () => {
  return (
    <div className={styles.loaderContainer}>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default LoaderProgress;
