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
  // fetch("http://localhost:8080/api/post/timeline/60b70e3b3e650f05f456a9af", {
  //   headers: {
  //     Authorization:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InByb2ZpbGVQaWN0dXJlIjoiIiwiY292ZXJQaWN0dXJlIjoiIiwiZm9sbG93ZXJzIjpbXSwiZm9sbG93aW5ncyI6W10sImlzQWRtaW4iOmZhbHNlLCJfaWQiOiI2MGRjNzM4YjczNDY1ZjE0ZDA1Y2Y5YjkiLCJ1c2VybmFtZSI6Ildhc2lxIEFiZHVsbGFoIiwiZW1haWwiOiJjaHdhc2lxMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEFzZU1lSjhhRFdsQXhOZ3hRdHY0dHVDbE8xNFcuR2t5RkFTNWxJVkZnYldhWDV0RlhiZmpxIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0zMFQxMzozNzoxNS45NzlaIiwidXBkYXRlZEF0IjoiMjAyMS0wNi0zMFQxMzozNzoxNS45NzlaIiwiX192IjowfSwiaWF0IjoxNjI2MTE2NDEzLCJleHAiOjE2MjYxMjAwMTN9.K2OgB210jIcGauH9nqgvHa3KQoajqWRxU2woTvNaKOs",
  //   },
  // })
  //   .then((response) => response.text())
  //   .then((res) => console.log(res))
  //   .catch((error) => console.log("error", error));
  const res = await fetch(
    "http://localhost:8080/api/post/timeline/60b70e3b3e650f05f456a9af",
    {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InByb2ZpbGVQaWN0dXJlIjoiIiwiY292ZXJQaWN0dXJlIjoiIiwiZm9sbG93ZXJzIjpbXSwiZm9sbG93aW5ncyI6W10sImlzQWRtaW4iOmZhbHNlLCJfaWQiOiI2MGRjNzM4YjczNDY1ZjE0ZDA1Y2Y5YjkiLCJ1c2VybmFtZSI6Ildhc2lxIEFiZHVsbGFoIiwiZW1haWwiOiJjaHdhc2lxMTIzQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEFzZU1lSjhhRFdsQXhOZ3hRdHY0dHVDbE8xNFcuR2t5RkFTNWxJVkZnYldhWDV0RlhiZmpxIiwiY3JlYXRlZEF0IjoiMjAyMS0wNi0zMFQxMzozNzoxNS45NzlaIiwidXBkYXRlZEF0IjoiMjAyMS0wNi0zMFQxMzozNzoxNS45NzlaIiwiX192IjowfSwiaWF0IjoxNjI2MTE2NDEzLCJleHAiOjE2MjYxMjAwMTN9.K2OgB210jIcGauH9nqgvHa3KQoajqWRxU2woTvNaKOs",
      },
    }
  );
  const { posts } = await res.json();
  return { props: { posts } };
}

export default Home;
