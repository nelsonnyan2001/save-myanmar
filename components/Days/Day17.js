import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Timeline() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>17th February 2021</h2>
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
            Cars oddly start breaking down. Nothing too crazy, just small little
            inconveniences in very congested areas.
            <br />
            <br />
            Oh, is that a very tight entry to a very crowded street? What a
            shame that this 40-seater bus should stop functioning!
            <br />
            <br />
            In a coordinated effort of all the drivers in the country, we block
            the paths of hundreds of roads all over the country. It prevents
            people who are trying to go to work from going to work - which, at
            this point constitutes about 10% of the population.
            <br />
            <br />
            Police are going crazy trying to figure out a way to stop this from
            happening.
            <br />
            <br />
            Oh woe.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>10:00 a.m.</h3>
          <p>
            There are so many people out on the streets. And this is coming from
            a population that has seen huge protests, some over the past week.
            There’s almost a million people in Yangon alone, crowding around
            embassies, bridges, pagodas and the city center.
            <br />
            <br />
            It’s awesome, and awful to see. Even if this coup succeeds and the
            military takes over, how will they rule over a country that hates
            them with every bit of their being?
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>3:00 p.m.</h3>
          <p>
            Many government-related operations have shut down. The healthcare
            sector was the first to go, as educated aspiring doctors started the
            Civil Disobedience Movement.
            <br />
            <br />
            Private banks then followed, then transportation.
            <br />
            <br />
            Right now, only a few government banks and Customs remain open.
            <br />
            <br />
            If they go down, the military regime will go down with them.
            <br />
            <br />
            Some of us begin to hope.
          </p>
        </Fade>
        <hr />
        <Fade bottom>
          <h3 className={styles.time}>8:00 p.m.</h3>
          <p>
            The news is pretty positive today.
            <br />
            <br />
            Today's protests have reinvigorated most of the population, and
            those that were mentally exhausted got a good dose of revitalizing
            after realizing how many people were in this together.
            <br />
            <br />
            Tonight's pot and pan banging was pretty fun. Lots of people came
            together tonight too. Despite the 8 p.m. curfew, there's some people
            on the streets leading the beating. Hopefully they got back home
            okay.
            <br />
            <br />
          </p>
        </Fade>
      </div>
    </div>
  );
}
