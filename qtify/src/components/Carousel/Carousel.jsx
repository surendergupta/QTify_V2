import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import LeftNavButton from '../LeftNavButton/LeftNavButton';
import RightNavButton from '../RightNavButton/RightNavButton';


import styles from "./Carousel.module.css";
const Carousel = ({items}) => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

  return (
    <div className={styles.carouselContainer}>
        <Swiper 
        ref={swiperRef}
        modules={[ EffectFade, Navigation ]}
        spaceBetween={10}
        slidesPerView="auto"
        navigation={{
            prevEl: '.swiperButtonPrev',
            nextEl: '.swiperbuttonNext',
        }}
        breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1440: { slidesPerView: 7 },
        }}
        className={styles.swiperContainer}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                    {/* Render your item component here */}
                    {item}
                </SwiperSlide>
            ))}
            {!isBeginning  && (
                <div className={`${styles.swiperButtonPrev} swiperButtonPrev`} onClick={() => swiperRef.current.slidePrev()}><LeftNavButton /></div>
            )}
            {!isEnd && (
                <div className={`${styles.swiperButtonNext} swiperbuttonNext`} onClick={() => swiperRef.current.slideNext()}><RightNavButton /></div>
            )}
        </Swiper>
    </div>
    
  )
}

export default Carousel