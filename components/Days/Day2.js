import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>2nd February 2021</h2>
        <h2 style={{ transform: open ? "rotate(180deg)" : null }}>↓</h2>
      </div>
      <div
        className={styles.timelineHolder}
        style={{ height: open ? null : "0" }}
      >
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 a.m.</h3>
          <p>
            Thankfully, our network connections haven't been cut off.
            <br />
            <br />
            Work returns to normal for some of us. Others reach out to friends
            and family, checking in and making sure everything is fine.
            <br />
            <br />
            Yet others continue the fight on social media.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 a.m.</h3>
          <p>
            CIVIL DISOBEDIENCE
            <br />
            <br />
            We will not protest on the streets. We will not provide an excuse
            for an actual military takeover.
            <br />
            <br />
            Instead, we will protest the safest way we know how - everyday
            business will NOT resume until the detained military members are
            released.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>3:00 p.m.</h3>
          <p>
            "Flights from Myanmar International Airport will be closed until
            30th May 2021."
            <br />
            <br />
            To some of us, this means nothing. To others, it is the end of any
            hopes we had of studying, working or meeting people we love abroad.
            <br />
            <br />
            There are plans for the country to rally behind a peaceful protest
            at 8 o'clock tonight.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 p.m.</h3>
          <p>
            The fateful banging of the pots and pans.
            <br />
            <br />
            There's a belief in Myanmar, where we'll bang pots and pans, honk
            cars and cause a lot of nuisance in general.
            <br />
            <br />
            We believe it drives away evil.
            <br />
            <br />
            We hope it drives away evil.
            <br />
            <br />
            We hope.
          </p>
        </Fade>
      </div>
    </div>
  );
}
