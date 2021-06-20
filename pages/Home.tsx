import * as React from "react";
import Header from "../components/Header/Header";
import Timeline from "../components/Timeline/Timeline";
import styles from "../styles/Home.module.css";

interface Post {
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

interface HomeProps {
  posts: [Post];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  console.log("PROPS", posts);
  return (
    <div className={styles.homePageWrapper}>
      <Header />
      <Timeline posts={posts} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:8080/api/post/timeline/60b70e3b3e650f05f456a9af"
  );
  const posts = await res.json();
  return { props: { posts } };
}

export default Home;
