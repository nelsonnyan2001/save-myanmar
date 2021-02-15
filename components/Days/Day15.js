import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>15th February 2021</h2>
        <h2 style={{ transform: open ? "rotate(180deg)" : null }}>↓</h2>
      </div>
      <div
        className={styles.timelineHolder}
        style={{ height: open ? null : "0" }}
      >
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>1:00 a.m.</h3>
          <p>
            Almost like clockwork, all connections cut off.
            <br />
            <br />
            We're plunged into darkness. For some cities, quite literally.
            <br />
            <br />
            The military took out the power plants in some towns, rendering them
            completely out of electricity. One cell phone battery and some
            candles to guide them on through this night.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 a.m.</h3>
          <p>
            We wake up to stories of break-ins by some convicts - you know,
            everyday things at this point - and...
            <br />
            <br />
            That's it, actually.
            <br />
            <br />
            Can you imagine how mystifying it is to be worried that NOTHING bad
            happened?
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>1:00 p.m.</h3>
          <p>
            6 flights occured over the blackout of last night.
            <br />
            <br />3 round trips from Kunming, China. Some say they were carrying
            troops. Some say they were carrying weapons. And the military says
            they were carrying seafood.
            <br />
            <br />
            We are living in a time and place where planes carrying guns and
            weapons are more believable than planes carrying seafood.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 p.m.</h3>
          <p>
            Widespread violence has started.
            <br />
            <br />
            Innocent people doing nothing are being bullied by police and
            soldiers.
            <br />
            <br />
            If you're reading this some time in the future, there's so many news
            outlets out there that reported the violence that broke out today.
            <br />
            <br />
            No deaths confirmed just yet, but there's an impending sense of doom
            that that's about to change very, very soon.
          </p>
        </Fade>
      </div>
    </div>
  );
}
