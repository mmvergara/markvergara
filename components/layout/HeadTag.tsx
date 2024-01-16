import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <title>Mark Vergara | Dev</title>
      <meta name="description" content="Mark Vergara's Profolio." />
      <meta
        name="keywords"
        content="mark vergara, mmvergara, mark matthew vergara, mark vergara developer portfolio"
      />
      <meta property="og:title" content="Mark Vergara's Portfolio" />
      <meta property="og:description" content="Mark Vergara's Profolio." />
      {/* <meta property="og:image" content="https://imgur.com/YTNNknY.png" /> */}
      <meta property="og:url" content="https://markvergara.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;
