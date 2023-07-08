import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import cls from "./People.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';
import { PeopleList } from '../../../constants/peopleList';
import { PeopleCard } from './peopleCard/PeopleCard';
import { Link } from 'react-router-dom';
import { path } from '../../../constants/path';

export const People = () => {
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
      slidesPerView: 5,
    }
  };

  return (
    <div className={cls.people}>
      <div className={cls.people__wrapper}>
        <h2 className={cls.people__title}>
          НАШИ ИЗВЕСТНЫЕ ЛЮДИ
        </h2>
        <Swiper
          className={cls.people__swiper}
          breakpoints={breakpoints}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={5}
          slidesPerView={5}
          slidesPerGroup={1}
          navigation
          pagination={{ clickable: true }}
          // loop={true}
          autoplay={{ delay: 3000 }}
          speed={1000}
        >
          {
            PeopleList.map(item =>
              <SwiperSlide key={item.id} className={cls.people__swiper_slide}>
                <PeopleCard {...item} />
              </SwiperSlide>
            )
          }
        </Swiper>
        <div className={cls.people__link}>
          <Link to={path.ARTISTS}>Больше...</Link>
        </div>
      </div>
    </div>
  )
};
