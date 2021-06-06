import Head from "next/head";
import styles from "../styles/Home.module.css";
import Auth from "../pages/Auth";
import Header from "../components/Header/Header";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Velvet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full	flex flex-col	items-center bg-brand-primary">
        <Header />
        {/* <Auth /> */}
        <Timeline />
      </main>
    </div>
  );
}
