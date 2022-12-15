import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../src/components/Feed";
import Sidebar from "../src/components/Sidebar";
import Widgets from "../src/components/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  console.log(tweets);

  return (
    <div className=" mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter Copy</title>
        <link
          rel="icon"
          href="https://links.papareact.com/drq"
        />
      </Head>

      <main className="grid grid-cols-9">
        <div className=" col-span-2">
          <Sidebar />
        </div>
        <div className=" col-span-7 border-x lg:col-span-5">
          <Feed />
        </div>
        <div className=" col-span-2 hidden lg:inline ">
          <Widgets />
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // create a type tweets
  const tweets = await fetchTweets();

  return {
    props: { tweets },
  };
};
