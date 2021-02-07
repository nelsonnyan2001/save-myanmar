import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Gallery.module.scss";

export default function Gallery({ data }) {
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
      <div className={styles.controls}>
        <span className={styles.subDued}>Swipe to view</span>
        <div>
          <div onClick={prev}>←</div> <div onClick={next}>→</div>
        </div>
      </div>
      <div style={{ height: 20 }} />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSwiper={setSwiper}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((each, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={each} className={styles.images} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
