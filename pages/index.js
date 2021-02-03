import Head from "next/head";
import { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import Help from "../components/Help/Help";

export default function Index() {
  let [initial, setInitial] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInitial(true);
    }, 2000);
  });
  return (
    <>
      <Head>
        <title>Save Myanmar.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Main />
      {initial && <Help />}
    </>
  );
}
