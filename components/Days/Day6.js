import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>6th February 2021</h2>
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
            Wi-fi and mobile data and any access to the internet for civilians
            cut out today.
            <br />
            <br />
            We're not sure what's happening. Calls and SMS still work, so people
            are communicating full-time on there. We're trying to keep up with
            each other, but we worry that there's something bigger, more
            sinister about to befall us.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>11:00 a.m.</h3>
          <p>
            There's been announcements being made that the internet blockage
            will go throuh until the end of the week. So 48 hours of no
            communication. That's what this spells.
            <br />
            <br />
            Unbeknownst to us, people from abroad are sending messages and
            protesting in their respective countries, trying to get their
            governments to do something - anything.
            <br />
            <br />
            Still not a word out of anyone about why.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>2:00 p.m.</h3>
          <p>
            There's talk of very, very big protests being organized tomorrow.
            Peaceful ones - we don't want to give the military any more reason
            to clamp down on us more than they already have.
            <br />
            <br />
            SMS becomes a virtual social media network. People spam messages to
            everyone in their contacts, asking them to relay the messages on to
            the contacts of the recipients.
            <br />
            <br />
            We try to warn each other of possible... anything. We're not sure
            what we're preparing for.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>7:30 p.m.</h3>
          <p>
            Maybe it's the anger. Maybe it's being left in the dark. Maybe it's
            the fucking hopelessness of it all.
            <br />
            <br />
            The beating of pots and pans start early today. The sound is
            cacophonous. It stretches on for miles and miles, and basically
            everyone joins in.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 p.m.</h3>
          <p>
            "The Lady has been released."
            <br />
            <br />
            The military-owned TV channels declared that Daw Aung San Suu Kyi
            had been released. It's the first good news we've had in almost a
            week.
            <br />
            <br />
            Ecstatic and uncontrollable, people take to the streets and yell in
            happiness. People go around in groups with cars honking horns.
            Fireworks go off. Literally, fireworks go off.
            <br />
            <br />
            Maybe that should have tipped us off.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>11:00 p.m.</h3>
          <p>
            Of course it's fake news. It's genuinely sad to see how easy it is
            to lie to a nation so desperate for hope. For one person to lie to
            another and to have it spread like cancer, a growth festering on a
            population that has nothing left to hold on to.
            <br />
            <br />
            Strangely enough, the news only strengthens our resolve for the
            protests tomorrow. Of course we mourn, but we are past locking our
            doors and waiting for someone to save us.
            <br />
            <br />
            It is time for action.
          </p>
        </Fade>
      </div>
    </div>
  );
}
