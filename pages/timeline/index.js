import React from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";
import Day1 from "../../components/Days/Day1";
import Day2 from "../../components/Days/Day2";
import Day3 from "../../components/Days/Day3";
import Day4 from "../../components/Days/Day4";
import Day5 from "../../components/Days/Day5";
import Day6 from "../../components/Days/Day6";
import Day7 from "../../components/Days/Day7";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <div className={styles.timelineFlex}>
        <div className={styles.backButton} onClick={() => router.push("/")}>
          ←
        </div>
        <div className="mw-1440">
          <h2 className={styles.mainTitle}>What has been happening?</h2>
          <br />
          <br />
          <br />
          <Day1 />
          <hr />
          <Day2 />
          <hr />
          <Day3 />
          <hr />
          <Day4 />
          <hr />
          <Day5 />
          <hr />
          <Day6 />
          <hr />
          <Day7 />
          <hr />
        </div>
      </div>
    </>
  );
}
