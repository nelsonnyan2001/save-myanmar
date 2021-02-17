import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>16th February 2021</h2>
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
            The Internet shutdown thing seems to be turning into routine at this
            point. From 1 a.m. to 9 a.m., there’s absolutely zero contact to be
            made with the outside world, other than our landlines and SMS’s.
            <br />
            <br />
            Most of us speculate that there’s Chinese involvement in this, that
            they’re going to be implementing a VPN.
            <br />
            <br />
            If CDM hasn’t succeeded by the time they finish, the VPN will be the
            least of our concerns.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 a.m.</h3>
          <p>
            Today, the military declared a new law to incriminate the president
            and Daw Aung San Suu Kyi.
            <br />
            <br />
            “Cause for nationwide concern because of COVID” was what they called
            it.
            <br />
            <br />
            Most of us aren’t even surprised anymore at this point, to be very
            honest.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>12:00 p.m.</h3>
          <p>
            The military are holding a press conference today. Journalists and
            news teams all over Myanmar agree unanimously to not attend it.
            <br />
            <br />
            Unanimously rings hollow, however, as there are some state-run media
            agencies that end up going.
            <br />
            <br />
            Remember how Facebook is banned here? A cookie for whoever guesses
            what social media the most hypocritical stratocracy in history used
            as their primary streaming platform.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>3:00 p.m.</h3>
          <p>
            Lies. Blatant, ugly lies from the press conference.
            <br />
            <br />
            “Oh, no, we didn’t actually shoot the girl that died.” - about the
            girl that was killed not a week ago, found with a bullet in her head
            in a country where the government is the only ones that hold guns.
            <br />
            <br />
            “We will operate as the constitution states.” - on every question
            they don’t want to answer. No problem with the statement, except for
            the fact that they’re drawing up new constitutions every couple
            hours.
            <br />
            <br />I can keep going on, but you get the idea.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 p.m.</h3>
          <p>
            News of the new incrimination charges, coupled with the press
            conference, has people in a rise.
            <br />
            <br />
            Tomorrow, on the 17th of January, we would go on the streets and
            march for freedom again, all young and old and firm and weak.
            <br />
            <br />
            We will show them that this coup is no longer about parties, it is
            about a struggle for human decency between 50 million people and a
            lying, scheming, wicked military.
          </p>
        </Fade>
      </div>
    </div>
  );
}
