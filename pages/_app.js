import "../styles/globals.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Save Myanmar.</title>
        <link rel="shortcut icon" href="/pictures/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Save Myanmar" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
