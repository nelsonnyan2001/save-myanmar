import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>12th February 2021</h2>
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
            Prisoners are being released from prisons.
            <br />
            <br />
            Convicts, thugs and people you generally wouldn't want in your
            neighborhood are being released from prison, under pardon from a new
            law released just today.
            <br />
            <br />
            Over 23,000 people from prisons all over the country are being
            brought into the population.
            <br />
            <br />
            We can only wonder what this move is for.
            <br />
            <br />
            We find out much sooner than we'd like.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>1:00 p.m.</h3>
          <p>
            People are getting more and more paranoid.
            <br />
            <br />
            Some of us start thinking of a future in which the military actually
            ends up winning. It's a frightening thought to have.
            <br />
            <br />
            Those of us that has the resources to leave the country, will. Those
            that don't will have to find ways to. Those that absolutely cannot
            will have to keep fighting in the hopes that they are the last
            generation to go through this.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>5:00 p.m.</h3>
          <p>
            There's news that the newly released convicts will tear into our
            ranks tonight.
            <br />
            <br />
            We're cautious, but among the slew of fake news that have overrun
            social media, we don't know what to believe.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 p.m.</h3>
          <p>
            People are banging their pots and pans. This isn't the usual 8
            o'clock cacophony.
            <br />
            <br />
            It's a cry for help.
            <br />
            <br />
            We wouldn't know it yet, but all over the country, villages and
            cities are being invaded. Fires have been started near big cities
            and no one's around to put them out.
            <br />
            <br />
            But that's okay, we have police, right?
            <br />
            <br />
            Right?
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>11:00 p.m.</h3>
          <p>
            Social media is blowing up. It's the fucking COPS that are doing
            this. The people that swore to protect us are the ones trying to
            kill us.
            <br />
            <br />
            It's not just them, of course. The convicts released earlier today
            have been armed to the teeth with knives, swords and homemade
            molotovs. We're in a war right now, the people of Myanmar against
            the military.
            <br />
            <br />
            And we're not the ones holding the weapons.
          </p>
        </Fade>
      </div>
    </div>
  );
}
