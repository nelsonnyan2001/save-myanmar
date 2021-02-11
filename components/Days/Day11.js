import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>11th February 2021</h2>
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
            A new law is being set in motion. "Cyber Law", it's being dubbed.
            <br />
            <br />
            It's a crazy law. Basically, it prohibits any average Joe from
            having anything to do with technology. Complete and total monitoring
            by the government. Anything we say against the government can land
            us in jail.
            <br />
            <br />
            And the best part is it's being put in plan 4 days from today.
            <br />
            <br />
            An absolute, entire dystopian present.
            <br />
            <br />
            It feels like a Black Mirror episode. I wonder if we'll ever get to
            wake up.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>11:00 a.m.</h3>
          <p>
            The new law has frightened the entire population. Of course it has.
            This fundamentally means we no longer have a future as a country. No
            foreign company will want to invest in a country that literally
            cannot move without the government breathing down their necks.
            <br />
            <br />
            People beg others to follow CDM with a fresh urgency. The good news
            is that by this point, there's only a few major corporations with
            employees still going to work and not following the movement.
            <br />
            <br />
            The bad news is that all five of those are the only ones needed to
            keep the government running.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>1:00 p.m.</h3>
          <p>We're tired. We're so fucking tired.</p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>4:00 p.m.</h3>
          <p>
            But we're not giving up. Not yet. Far from it.
            <br />
            <br />
            The protests are smaller today - the diehards are resting and the
            people that were just tagging along have no one to tag along with.
            <br />
            <br />
            We try to target key spots - embassies, government buildings,
            offices that haven't adopted CDM. We sit in front of
            government-owned businesses, discouraging employees from working and
            to set aside a day of work to be free of a future as a slave.
          </p>
        </Fade>
      </div>
    </div>
  );
}
