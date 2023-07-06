import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';

import cls from "./Theater.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';

export const Theater = () => {
  const breakpoints = {
    // Брейкпоинт на ширине экрана >= 640px
    10: {
      slidesPerView: 1,
    },
    // Брейкпоинт на ширине экрана >= 768px
    768: {
      slidesPerView: 2,
    },
    // Брейкпоинт на ширине экрана >= 1024px
    1024: {
      slidesPerView: 3,
    }
  };

  return (
    <div className={cls.theater}>
      <div className={cls.theater__block}>
        <div className={cls.theater__block_line}></div>
        <h2 className={cls.theater__title}>
          АРХИТЕКТУРА ТЕАТРА
        </h2>
        <div className={cls.theater__block_line}></div>
      </div>
      <Swiper
        breakpoints={breakpoints}
        modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={8}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
      >
        <SwiperSlide className={cls.theater__image}>
          <img src="/src/assets/img/opera1.png" alt="Opera Balet" />
        </SwiperSlide>
        <SwiperSlide className={cls.theater__image}>
          <img src="/src/assets/img/opera2.png" alt="Opera Balet" />
        </SwiperSlide>
        <SwiperSlide className={cls.theater__image}>
          <img src="/src/assets/img/opera3.png" alt="Opera Balet" />
        </SwiperSlide>
        <SwiperSlide className={cls.theater__image}>
          <img src="/src/assets/img/opera1.png" alt="Opera Balet" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
};
