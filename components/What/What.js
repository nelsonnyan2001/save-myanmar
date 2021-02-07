import React, { useRef } from "react";
import Fade from "react-reveal/Fade";
import styles from "./What.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Gallery from "../Gallery/Gallery";

export default function What() {
  const potImages = [
    "/pictures/pot1.png",
    "/pictures/pot2.png",
    "/pictures/pot3.png",
  ];

  const protestImages = [
    "/pictures/protest1.png",
    "/pictures/protest2.png",
    "/pictures/protest3.png",
  ];
  return (
    <>
      <div className="mw-1440">
        <div className="mw-880">
          <div className={styles.whatParent}>
            <Fade bottom>
              <h2>
                What is this
                <br />
                takeover about?
              </h2>
              <hr className={styles.separator}></hr>
              <p className={styles.para}>
                In 2010, the general election officially absolved us from almost
                50 years of military rule. Our democratically elected leader,
                Daw Aung San Suu Kyi won the election and power was taken from
                the military junta.
                <br />
                <br />
                For the first time in half a century, we experienced a lick of
                democracy.
                <br />
                <br />
                Now, 10 years later, we fear it may be being taken away from us.
              </p>
              <div style={{ height: "50px" }} />
              <img src="/pictures/tfs.png" className={styles.images} />
              <br />
              <p className={styles.subDued}>
                The three-fingered salute. A symbol of protest against
                authoritarian and dictatorship rule.
              </p>
              <h2>What's happening in Myanmar right now?</h2>
              <hr className={styles.separator}></hr>
              <p className={styles.para}>
                We're doing what we can. Social media is our pièce de résistance
                right now. People are showing support for the Lady as much as we
                can. Facebook, Instagram, Twitter are flooded with posts trying
                to get the word out and raise as much awareness as possible.
                <br />
                <br />
                We bang our pots and pans. We honk our horns. We protest as
                peacefully as we can.
              </p>
              <div style={{ height: "20px" }} />

              <Gallery data={potImages} />

              <p className={styles.subDued}>
                "You should never let your fears prevent you from doing what you
                know is right."
                <br />- Aung San Suu Kyi
              </p>

              <h2>The Civil Disobedience Movement</h2>
              <hr className={styles.separator}></hr>
              <p className={styles.para}>
                The Civil Disobedience Movement is a form of protest in which
                the citizens refuse to work for a military government.
                <br />
                <br />
                Pioneered by medical professionals, the movement is slowly
                gaining traction as civilians refuse to fulfill their duties for
                unlawful rulers.
                <br />
                <br />
                We hope it is not too little too late.
              </p>
              <div style={{ height: "50px" }} />
              <img src="/pictures/cdm.png" className={styles.images} />
              <br />
              <p className={styles.subDued}>
                The "official" symbol of a nation refusing to bow down to
                military rule.
              </p>

              <h2>The protests</h2>
              <hr className={styles.separator}></hr>
              <p className={styles.para}>
                On the 7th day of the military takeover, the population of
                Myanmar came together in to organize multiple peaceful protests
                all over Myanmar.
                <br />
                <br />
                Hundreds of thousands of people pour out of their homes and join
                in marches in major towns and cities all over the country.
                <br />
                <br />
                Death to dictatorship.
              </p>

              <div style={{ height: "20px" }} />

              <Gallery data={protestImages} />

              <h3>
                The eyes of the world are on Myanmar. Please, help us return to
                a democracy and live in a world where we do not have to worry
                about tomorrow.
              </h3>
              <hr className={styles.separator}></hr>
              <p>
                Spread the word.
                <br />
                <br />
                #SaveMyanmar
              </p>
            </Fade>
            <div style={{ height: "40px" }} />
          </div>
        </div>
      </div>
    </>
  );
}
