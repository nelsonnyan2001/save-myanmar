import React from "react";
import styles from "./Help.module.scss";
import { useRouter } from "next/router";

export default function Help() {
  const router = useRouter();
  return (
    <div className={styles.helpParent}>
      <div
        className={styles.helpLeft}
        onClick={() => router.push("/helping-us")}
      >
        <div className={styles.helpButton}>how can you help?</div>
      </div>
      <div className={styles.helpRight} onClick={() => router.push("/links")}>
        <div className={styles.helpButton}>A collection of links</div>
      </div>
    </div>
  );
}
