import Head from "next/head";
import Main from "../components/Main";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="bg-black">
      <NextSeo
        title="Contract Recruiters and Recruiting Consulting"
        description="Contract recruiters and recruiting consulting for early stage startups"
      />
      <Head>
        <title>Fishercat Consulting</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
    </div>
  );
}
