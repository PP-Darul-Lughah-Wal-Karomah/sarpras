import { NextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";

const Dev: NextPage = () => {
  return (
    <>
      <Head>
        <title>sarpras</title>
        <meta name="description" content="Generated by Create Next Stack." />
      </Head>
      <LandingPageTemplate />
    </>
  );
};

export default Dev;
