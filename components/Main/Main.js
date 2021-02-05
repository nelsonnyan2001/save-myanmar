import React from "react";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <div className="mw-1440">
          <div className={styles.mainText}>
            <span className={styles.fadeIn}>
              On February 1st, 2021, citizens all over Myanmar woke up to a
              reality that we hoped we had left behind.
            </span>
            <br />
            <br />
            <span className={styles.fadeInSlow}>
              This is Myanmar's third military coup.
            </span>
          </div>
        </div>
        <div className={styles.scrollHolder}>↓</div>
      </div>
    </>
  );
}
