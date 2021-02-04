import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>4th February 2021</h2>
        <h2 style={{ transform: open ? "rotate(180deg)" : null }}>↓</h2>
      </div>
      <div
        className={styles.timelineHolder}
        style={{ height: open ? null : "0" }}
      >
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 a.m.</h3>
          <p>
            Facebook is gone. Instagram is gone. Whatsapp is gone.
            <br />
            <br />
            People look for workarounds. VPN companies are having a field day.
            <br />
            <br />
            Oh, who will hear our cries now?
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>11:00 a.m.</h3>
          <p>
            More doctors join in the Civil Disobedience Movement.
            <br />
            <br />
            Rumours of violence and danger of staying out past the curfew start
            leaking. No one is sure if this is real - whether people are just
            being fearmongers or if the days ahead are to be filled with
            bloodshed.
            <br />
            <br />
            People unite under a theme of red, under unity never breaking the
            spirit of true democracy in Myanmar.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>3:00 p.m.</h3>
          <p>
            There are peaceful protests in Mandalay. We wonder how long they
            will be peaceful for.
            <br />
            <br />
            More fake news, more propaganda leaks as people start wondering if
            half the things they see online are real. Some of the leaks seem too
            gruesome to be, but these are gruesome times we are living in.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 p.m.</h3>
          <p>
            As the days drag on to more grim news, we share stories of the
            bloodshed that happened some 30-odd years ago.
            <br />
            <br />
            Lest they repeat.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 p.m.</h3>
          <p>
            Punctual as ever. The drums of peace sound the streets of Myanmar.
            <br />
            <br />
            The sound goes on for almost half an hour. People drive around in
            groups, honking horns where the houses are too far apart to
            noticeably beat their drums.
            <br />
            <br />
            We hope tomorrow will bring a brighter future. We hope we will not
            have to beat these pans for much longer.
          </p>
        </Fade>
      </div>
    </div>
  );
}
