import React, { useRef } from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import styles from "./What.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

export default function What() {
  const SwiperInstance = useRef();

  const setSwiper = (sw) => {
    SwiperInstance.current = sw;
  };

  const next = () => {
    SwiperInstance.current.slideNext();
  };

  const prev = () => {
    SwiperInstance.current.slidePrev();
  };
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
              <Image
                src="/pictures/tfs.png"
                width={100}
                height={100}
                layout="responsive"
              />
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
                <br />
                <br />
                <div className={styles.controls}>
                  <span className={styles.subDued}>Swipe to view</span>
                  <div>
                    <div onClick={prev}>←</div> <div onClick={next}>→</div>
                  </div>
                </div>
              </p>
              <div style={{ height: "20px" }} />
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                onSwiper={setSwiper}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <Image
                    src="/pictures/pot1.png"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/pictures/pot2.png"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/pictures/pot3.png"
                    width={100}
                    height={100}
                    layout="responsive"
                  />
                </SwiperSlide>
              </Swiper>
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
              <Image
                src="/pictures/cdm.png"
                width={100}
                height={100}
                layout="responsive"
              />
              <br />
              <p className={styles.subDued}>
                The "official" symbol of a nation refusing to bow down to
                military rule.
              </p>
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
