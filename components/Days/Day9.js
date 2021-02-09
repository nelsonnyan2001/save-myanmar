import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>9th February 2021</h2>
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
            Everything blurs together after long enough. The hours stretch into
            each other and it's hard to be sure how many days have passed.
            <br />
            <br />
            I'm sorry. Being a bit too melodramatic.
            <br />
            <br />
            Where were we?
            <br />
            <br />
            Coup. Protests. Democracy. Right.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>10:00 a.m.</h3>
          <p>
            The protest don't draw as much people as previous days. Maybe it's
            the new Martial Law they've set in place. Maybe we're biding our
            time, knowing it's gonna be a long battle.
            <br />
            <br />
            Maybe some of us are just... tired.
            <br />
            <br />
            But not much people is not the same as no people. We show up in
            small groups, gather in our cars and go honking, continue with the
            Civil Disobedience Movement. We do what we can.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>12:00 p.m.</h3>
          <p>
            There's news of a fatal encounter in Nay Pyi Taw, between a girl and
            an overeager soldier.
            <br />
            <br />
            She seems to have been shot. Fatal or in a coma for life, they said.
            Why do we have a way of describing something so gruesome in so
            little words?
            <br />
            <br />
            We hope this is not the first of many to follow. We hope this is the
            last, an example that should never be followed.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>3:00 p.m.</h3>
          <p>
            It's confirmed. The girl is in a coma, and there isn't much anyone
            can do about it. "Death by brain damage", it would later be
            pronounced. Not "death by a bullet" or "death by a peaceful
            protest". "Death by brain damage".
            <br />
            <br />
            More reports of violence pour in through social media. Water cannons
            in Hledan, Yangon. Tear gas and acid spray in Mandalay. Police
            brutality in Myawaddy. The list goes on.
            <br />
            <br />
            More news of "condemnations" and "immediate action must be taken"
            from governments all over the world. The military is killing the
            citizens it swore to protect. Do you seriously think they give a
            shit about a condemnation?
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 p.m.</h3>
          <p>
            <b>*** Author's note ***</b>
            <br />
            It's depressing to update this every day. I'm a one man team on this
            website, and I don't even know how many people read this thing. But
            I'll keep updating it as often as I can, as much as the internet
            permits, I guess. Maybe someone somewhere will stumble upon this and
            take their time to read through this. This isn't fiction. This is
            the life of me and 50 million odd other people like myself. God help
            us all.
            <br />
            <b>*** Author's note ***</b>
          </p>
        </Fade>
      </div>
    </div>
  );
}
