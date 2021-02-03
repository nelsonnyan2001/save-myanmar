import React from "react";
import { useRouter } from "next/router";
import styles from "./helping-us.module.scss";

export default function index() {
  const router = useRouter();
  return (
    <div className="mw-1440" style={{ height: "100%" }}>
      <div className={styles.helpingParent}>
        <div className={styles.backButton} onClick={() => router.push("/")}>
          ←
        </div>
        <div className={styles.myanmar}>
          <div className="mw-400">
            <h2>Are you from Myanmar?</h2>
            <br />
            <p>
              Support each other - this doesn't get stressed enough.
              <br />
              <br />
              Raise awareness. This doesn't just mean changing your profile
              picture to red and smacking yourself on the back and calling it a
              day.
              <br />
              <br />
              Don't spam the comment sections of public figures from abroad. As
              much as you might think it helps, it doesn't.
              <br />
              <br />
              Support Civil Disobedience as much as you can. If you're too young
              to, try to convince people around you.
              <br />
              <br />
              Don't believe everything you hear. Don't spread everything you
              hear.
              <br />
              <br />
              Don't protest on the streets. <br />
              <br />
              Every little bit helps.
            </p>
          </div>
        </div>
        <div className={styles.abroad}>
          <div className="mw-400">
            <h2>Are you from abroad?</h2>
            <br />
            <p>
              Keep in contact with those of us here.
              <br />
              <br />
              Do everything you can to let people around you know. More likely
              than not, there's probably a protest going on near you.
              <br />
              <br />
              These early few days will be the most critical. We cannot afford
              to have people stop caring.
              <br />
              <br />
              Get the leaders of your respective countries to care. A resolution
              has to be reached.
              <br />
              <br />
              Every little bit helps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
