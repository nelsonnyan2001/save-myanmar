import React from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";
import Day1 from "../../components/Days/Day1";
import Day2 from "../../components/Days/Day2";
import Day3 from "../../components/Days/Day3";

export default function Index() {
  return (
    <>
      <div className={styles.timelineFlex}>
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
        </div>
      </div>
    </>
  );
}
