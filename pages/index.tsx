import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../src/components/Feed";
import Sidebar from "../src/components/Sidebar";
import Widgets from "../src/components/Widgets";

const Home: NextPage = () => {
  return (
    <div className=" lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
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
        <div className=" col-span-7 lg:col-span-5 border-x">
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
