import React from "react";
import Head from "next/head";

export default function Blog() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.bloghandy.com/api/bh_blogengine.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Fishercat Consulting</title>
        <link rel="icon" href="/favicon.png" />
        <script>var bh_id = "60CUPq6D3w810VNTA3MQ";</script>
      </Head>
      <section class="text-white-600 text-base body-font bg-black">
        <div class="max-w-5xl pt-52 pb-24 mx-auto flex flex-col items-center content">
          <div id="bh-posts"></div>
        </div>
      </section>
    </>
  );
}
