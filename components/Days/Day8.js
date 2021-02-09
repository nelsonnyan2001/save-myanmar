import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>8th February 2021</h2>
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
            One full week.
            <br />
            <br />
            One full week of an unwanted, oppressive military coup.
            <br />
            <br />
            We must continue fighting.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>10:00 a.m.</h3>
          <p>
            The crowds are growing. Seven hundred thousand people and climbing
            in Yangon alone. It's absurd, the military's still claiming voter
            fraud and saying the people are "disrupting the peace".
            <br />
            <br />
            Yes, we're the ones disrupting the peace. We, who have no weapons
            and no power against a government of guns and violence are the ones
            disrupting the peace.
            <br />
            <br />I hope the irony is not lost on you, dear reader.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>12:00 p.m.</h3>
          <p>
            The sheer scale of almost a million people is breathtaking. It's
            hard to comprehend, this mass of humanity, each with its own sets of
            hopes and dreams.
            <br />
            <br />
            And everyone praying and hoping for a future at accomplishing them.
            <br />
            <br />
            The chants today all have a theme of "Death to dictatorship". Gen Z
            come out with some questionable signs, but it garners media
            attention so no one's complaining. And hey, it provides some comic
            relief.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>3:00 p.m.</h3>
          <p>
            The first news of violent breakouts arrive.
            <br />
            <br />
            Threats ring throughout the country - the military is bringing out
            the weapons.
            <br />
            <br />
            Stories of people being arrested for no reason, firetrucks hosing
            down people, tear gas being used on large crowds. We worry for
            tomorrow's protests but are cautiously optiimistic. Maybe they're
            pulling out the big guns cause they're being backed into a corner.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 p.m.</h3>
          <p>
            People recouperate. We're trying not to think of how reminiscent of
            a war this is. We think of how reminiscent of war this is anyway.
            <br />
            <br />
            "Do we participate in a politics of cynicism, or do we participate
            in a politics of hope?" - Obama's 2004 DNC Convention speech.
          </p>
        </Fade>
      </div>
    </div>
  );
}
