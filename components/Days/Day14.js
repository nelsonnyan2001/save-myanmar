import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>14th February 2021</h2>
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
            Valentine's day for some of you.
            <br />
            <br />
            The end of the second week of a coup for the rest of us.
            <br />
            <br />
            Lovers unite on the streets for protests.
            <br />
            <br />
            New date idea for you, dear reader?
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>12:00 p.m.</h3>
          <p>
            Everything is relatively normal in the morning today.
            <br />
            <br />
            Wake up, get mad at the military, get scared for the future and get
            ready for more protesting.
            <br />
            <br />
            Humans are so fucking adaptable we managed to come up with a daily
            military coup routine.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>5:00 p.m.</h3>
          <p>
            The internet's going to be cut off from 1:00 a.m. midnight to 9:00
            a.m. the next morning.
            <br />
            <br />
            What an announcement. The amount of speculation, fear and warning
            bells this set off, I tell ya.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 p.m.</h3>
          <p>
            Right after the announcement, the military pulls up.
            <br />
            <br />
            Tanks, trucks filled with soldiers, UAV's and jeeps. You name it,
            you saw it. They rode into every major city in Myanmar. We suspect
            it has something to do with tonight.
            <br />
            <br />
            We set up civilian guards armed with sticks and branches at the head
            of every township. We block the roads with our cars, knowing it
            doesn't make a difference but trying regardless.
            <br />
            <br />
            Because no one will protect us if we don't protect ourselves.
          </p>
        </Fade>
      </div>
    </div>
  );
}
