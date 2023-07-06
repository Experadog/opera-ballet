import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { ShowList } from '../../../constants/ShowList';
import { SwiperCard } from '../swiperCard/SwiperCard';

import cls from "./Performances.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';

export const Performances = () => {
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
      slidesPerView: 4,
    }
  };

  return (
    <div className={cls.performances}>
      <h2 className={cls.performances__title}>
        БЛИЖАЙШИЕ СПЕКТАКЛИ
      </h2>
      <Swiper
        breakpoints={breakpoints}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={8}
        slidesPerView={4}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        // loop={true}
        autoplay={{ delay: 2000 }}
        speed={1000}
      >
        {
          ShowList.map(item =>
            <SwiperSlide key={item.id}>
              <SwiperCard {...item} />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  )
};
