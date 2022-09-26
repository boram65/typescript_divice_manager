import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Counter from "../component/Counter";

const Home: NextPage = () => {
  return (
    <>
      <div>Hello world !</div>
      <Counter title={12345} />
    </>
  );
};

export default Home;
