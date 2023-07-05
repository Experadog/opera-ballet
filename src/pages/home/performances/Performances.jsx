import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { ShowList } from '../../../constants/ShowList';
import { SwiperCard } from '../swiperCard/SwiperCard';

import cls from "./Performances.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';

export const Performances = () => {
  return (
    <div className={cls.performances}>
      <h2 className={cls.performances__title}>
        БЛИЖАЙШИЕ СПЕКТАКЛИ
      </h2>
      <Swiper
        style={{ minWidth: 0 }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={8}
        slidesPerView={4}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        // loop={true}
        autoplay={{ delay: 1000 }}
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
