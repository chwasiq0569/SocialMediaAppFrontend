import * as React from "react";
import Header from "../components/Header/Header";
import Timeline from "../components/Timeline/Timeline";
import styles from "../styles/Home.module.css";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.homePageWrapper}>
      <Header />
      <Timeline />
    </div>
  );
};

export default Home;
