import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>10th February 2021</h2>
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
            Are you still here, dear reader?
            <br />
            <br />
            Do you tune in out of morbid curiosity? Do you think there is any
            hope for us? Do you think democracy is possible for the people of
            Myanmar?
            <br />
            <br />
            We certainly hope so.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 a.m.</h3>
          <p>
            Today, there's some news of some cops and soldiers who joined our
            cause. We're not sure if it's true. We hope it is, and we see news
            about it, but there's so much propaganda we have trouble
            differentiating between the truth and lies.
            <br />
            <br />
            We openly embrace them, of course.
            <br />
            <br />
            Any help is appreciated.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>12:00 p.m.</h3>
          <p>
            Social media has news all over the place. The protests are slowly
            turning into festivities. People are treating it as jokes.
            <br />
            <br />
            Cars go around blaring festival music, anthems totally unrelated to
            the military takeover and people from god knows where are disrupting
            the actual protests, treating it as "fun" and deviating us from the
            path we're trying to stay on.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>3:00 p.m.</h3>
          <p>
            We're hearing about a new "Great Firewall" that might be implemented
            in a couple days.
            <br />
            <br />
            The government's already banned all the social medias in the
            country. We're using VPN's to bypass their blockades, but this new
            firewall will prevent even that.
            <br />
            <br />
            It's akin to the Great Chinese Firewall. Unlike China, however, we
            don't have the infrastructure to support the country and speak out
            if this firewall is put in place.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 p.m.</h3>
          <p>
            I don't update this part in my daily messages, but the pot and pan
            banging is still going on. It doesn't last as long as it used to in
            the first few days, but we're still hitting our pots and pans.
            <br />
            <br />
            It's a routine at this point, 15 minutes every night of standing on
            a balcony looking at a small sea of people angrily but calmly saying
            "We don't accept this government. Give us our leaders back."
          </p>
        </Fade>
      </div>
    </div>
  );
}
