import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>1st February 2021</h2>
        <h2 style={{ transform: open ? "rotate(180deg)" : null }}>↓</h2>
      </div>
      <div
        className={styles.timelineHolder}
        style={{ height: open ? null : "0" }}
      >
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>4:00 a.m.</h3>
          <p>
            The democratically elected party leader and state counsellor Aung
            San Suu Kyi gets detained.
            <br />
            <br />
            One by one, government officials and politicians follow.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:30 a.m.</h3>
          <p>
            "The phone lines have been cut."
            <br />
            <br />
            "Wi-fi and mobile data will probably follow soon."
            <br />
            <br />
            Talk of a coup had been going on for several days now. Realizing our
            fears had been affirmed, most of the population set out to buy
            rations for the upcoming weeks.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 a.m. - 3 p.m.</h3>
          <p>
            For a couple hours, the entire country started lost access to the
            internet.
            <br />
            <br />
            It lasted 2 or 3 hours for some people, and over half a day for
            others.
            <br />
            <br />
            Most TV channels no longer work. The ones that work are all
            military-owned.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>3 p.m.</h3>
          <p>
            Unrest begins.
            <br />
            <br />
            People take to Facebook, Instagram, Twitter and Reddit. We bring
            what we have to see what we can do.
            <br />
            <br />
            We receive news that the military rule will go on for a year.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8 p.m.</h3>
          <p>
            For most of us, the realization has set in.
            <br />
            <br />
            The realization things probably will not go back to the things they
            were. Not for a while
            <br />
            <br />
            The realization that we cannot let history repeat.
            <br />
            <br />
            We go to sleep amid rumors of all network connections being gone
            tomorrow.
          </p>
        </Fade>
      </div>
    </div>
  );
}
