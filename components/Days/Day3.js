import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>3rd February 2021</h2>
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
            Day 3.
            <br />
            <br />
            Day 3 of hoping something changes.
            <br />
            <br />
            Day 3 of being worried about repeating history.
            <br />
            <br />
            Day 3 of a military rule.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 a.m.</h3>
          <p>
            It's funny, reading comments online. Governments express their
            "condemnations". Celebrities express their "concern".
            <br />
            <br /> At the same time, there's equally as many people criticizing
            the country. Criticizing our leaders, speaking as if they knew
            better than the people that live here.
            <br />
            <br />A ping-pong match between people that don't live here, that
            have never experienced the horrors of absolute military rule.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>11:00 a.m.</h3>
          <p>
            Doctors have carried the torch and ran with the flame of civil
            disobedience.
            <br />
            <br />
            We hope as many people as possible will follow suit, soon.
            <br />
            <br />
            Fake news runs amok among us, with a new rumor whispering fear in
            our ears every other hour.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 p.m.</h3>
          <p>
            You're not allowed to detain a person for longer than 72 hours with
            no legal precedence.
            <br />
            <br />
            Guess what?
            <br />
            <br />
            Daw Aung San Suu Kyi gets arrested for possession of an unlicensed
            walkie talkie.
            <br />
            <br />
            We hope.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 p.m.</h3>
          <p>
            The sound of pots and pans being banged together by a tired
            population rings throughout the streets.
            <br />
            <br />
            We sing a song in defiance. Called "Kabar Ma Kyay", it's a play on
            words on the national anthem.
            <br />
            <br />
            The noise goes on for noticeably longer than yesterday.
          </p>
        </Fade>
      </div>
    </div>
  );
}
