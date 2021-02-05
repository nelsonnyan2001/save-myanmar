import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>5th February 2021</h2>
        <h2 style={{ transform: open ? "rotate(180deg)" : null }}>↓</h2>
      </div>
      <div
        className={styles.timelineHolder}
        style={{ height: open ? null : "0" }}
      >
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 a.m.</h3>
          <p>
            I used to check news outlets every morning. Reddit always had big,
            bold declarations of crises going on all over the world, but that
            was just that. Text on a screen.
            <br />
            <br />
            It's a world of difference if it's your country in the headlines.
            <br />
            <br />
            What crazy times we live in.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>9:00 a.m.</h3>
          <p>
            There was a collective condemnation by the UN today. It feels like
            the calm before a storm, but honestly, no one knows what tomorrow
            brings.
            <br />
            <br />
            The Civil Disobedience Movement has spread now, to include teachers.
            Universities and schools all over the country come together to write
            condemnations and declarations of official disobedience, and
            teachers refusing to work for a military government that we never
            voted for.
            <br />
            <br />
            The movement is spreading like wildfire. We hope it's not a drop of
            resistance against an ever-growing inferno.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>2:00 p.m.</h3>
          <p>
            There were leaks today from within the military that the infantry is
            scared. That the Civil Disobedience Movement is something that the
            military government didn't know how to deal with.
            <br />
            <br />
            That there was talk of soldiers wondering if what they were doing
            was wrong.
            <br />
            <br />
            We remind each other to not hate the soldiers - they are just doing
            their jobs. We welcome dissenters from the military to return to
            their ranks, to see the terror that the current government is
            inflicting upon its people. We hope they see it.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>6:00 p.m.</h3>
          <p>
            More stories. More messages of support from friends and family all
            over the world. More propaganda. More fear.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 p.m.</h3>
          <p>
            It's eerily calming now, the beating of the pots and pans that go on
            every night.
            <br />
            <br />
            Heartbreaking videos surface online, of the older generation
            cheering on groups of the youth as they sound the drums, with sad
            eyes that spoke of a past that no one deserves to live through.
            <br />
            <br />
            Cars drive around in large groups. We cannot let this movement die
            down. We cannot give up. We cannot give in.
          </p>
        </Fade>
      </div>
    </div>
  );
}
