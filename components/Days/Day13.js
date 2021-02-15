import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>13th February 2021</h2>
        <h2 style={{ transform: open ? "rotate(180deg)" : null }}>↓</h2>
      </div>
      <div
        className={styles.timelineHolder}
        style={{ height: open ? null : "0" }}
      >
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>7:00 a.m.</h3>
          <p>
            The news has spread internationally.
            <br />
            <br />
            Big headlines saying "JUNTA CAUSES VIOLENCE".
            <br />
            <br />
            It wasn't just the cops and the ex-convicts last night. The military
            played a large part in the provisioning of the attacks.
            <br />
            <br />
            If the police and the military are the ones attacking us, then what
            the fuck do we even do?
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>12:15 p.m.</h3>
          <p>
            Today's Bogyoke Aung San's birthday.
            <br />
            <br />
            He's the father of Daw Aung San Suu Kyi. He was the pioneer behind
            the Independence of Myanmar from British Colonial rule.
            <br />
            <br />
            For 15 minutes, we stand in silence in our streets out of respect
            for the late General.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>5:00 p.m.</h3>
          <p>
            Ah yes. The "condemnations" and "we are seriously monitoring the
            situation"'s from the Western powers pour into the country.
            <br />
            <br />
            Some of us are optimistic, while others have given up on hoping for
            any foreign help, and have put all our democratic eggs into the CDM
            basket.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 p.m.</h3>
          <p>
            The overnight attacks continue.
            <br />
            <br />
            Today, they're poisoning the water lines. The convicts that are
            attacking us seem to be under some kind of drug influence.
            <br />
            <br />
            Some have been captured and we're trying to ask them questions. The
            interrogations don't go very well, and the only information we can
            ascertain is that they were prisoners up until 2 days ago.
            <br />
            <br />
            And that they were sent by someone.
          </p>
        </Fade>
      </div>
    </div>
  );
}
