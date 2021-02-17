import React from "react";
import styles from "./Timeline.module.scss";
import Day1 from "../../components/Days/Day1";
import Day2 from "../../components/Days/Day2";
import Day3 from "../../components/Days/Day3";
import Day4 from "../../components/Days/Day4";
import Day5 from "../../components/Days/Day5";
import Day6 from "../../components/Days/Day6";
import Day7 from "../../components/Days/Day7";
import Day8 from "../../components/Days/Day8";
import Day9 from "../../components/Days/Day9";
import Day10 from "../../components/Days/Day10";
import Day11 from "../../components/Days/Day11";
import Day12 from "../../components/Days/Day12";
import Day13 from "../../components/Days/Day13";
import Day14 from "../../components/Days/Day14";
import Day15 from "../../components/Days/Day15";
import Day16 from "../../components/Days/Day16";
import Day17 from "../../components/Days/Day17";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";

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
          <Fade>
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
            <Day8 />
            <hr />
            <Day9 />
            <hr />
            <Day10 />
            <hr />
            <Day11 />
            <hr />
            <Day12 />
            <hr />
            <Day13 />
            <hr />
            <Day14 />
            <hr />
            <Day15 />
            <hr />
            <Day16 />
            <hr />
            <Day17 />
            <hr />
          </Fade>
        </div>
      </div>
    </>
  );
}
