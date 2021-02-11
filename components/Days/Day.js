import React, { useState } from "react";
import styles from "./Timeline.module.scss";
import Fade from "react-reveal/Fade";

export default function Day({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.globals}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <h2>{data.day}</h2>
        <h2 style={{ transform: open ? "rotate(180deg)" : null }}>↓</h2>
      </div>
      <div
        className={styles.timelineHolder}
        style={{ height: open ? null : "0" }}
      >
        <hr />
        {data.records.map((each, i) => {
          return (
            <Fade key={i} bottom>
              <h3 className={styles.time}>{each.time}</h3>
              <p>
                {each.items.map((each, j) => {
                  return (
                    <>
                      <br />
                      {each}
                    </>
                  );
                })}
              </p>
              <hr />
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
