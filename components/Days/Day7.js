import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>7th February 2021</h2>
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
            The 7th day of a military coup.
            <br />
            <br />
            We still have no internet connection. We are still not sure who to
            turn to. We still live in fear.
            <br />
            <br />
            But maybe it is time we start doing something about it.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 a.m.</h3>
          <p>
            Huge crowds gather at famous locations all over Myanmar. If you are
            reading this some time in the future, you will probably have seen
            the news.
            <br />
            <br />
            Myeik. Myawaddy. Yangon. Mandalay. It's a combined force of almost
            one million Myanmar Citizens. And none of us knew the scale this was
            going on at.
            <br />
            <br />
            One country with every citizen of the old generation so filled with
            hatred and contempt at decades of authoritarian rule, and a new
            generation driven by purpose.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>12:00 p.m.</h3>
          <p>
            The marches begin.
            <br />
            <br />
            The streets are flooded with cries for a return to democracy. Calls
            for our elected leaders to be released. Death to a military
            dictatorship. People wearing red, white and black, old and young,
            fit and frail.
            <br />
            <br />
            It is truly a sight to behold. To see it on the news, on a screen,
            is one thing, but to have been in the protests, to have screamed
            your throats out for a common cause, is truly another.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>2:00 p.m.</h3>
          <p>
            Wi-fi returns. Perhaps it was the work of our protests. Perhaps the
            military is planning something else.
            <br />
            <br />
            We are too relieved to care.
            <br />
            <br />
            And then we see the scale of the protests. We see that we have not
            been alone in our efforts. All over the country, major government
            buildings are surrounded, everyone saying different words but
            meaning the same thing.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 p.m.</h3>
          <p>
            The protests die down. We will return tomorrow.
            <br />
            <br />
            We will not give up. We will not give in.
          </p>
        </Fade>
      </div>
    </div>
  );
}
