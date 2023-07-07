import React from 'react';

import cls from "./BannerSwiper.module.scss";

export const BannerSwiper = ({ url, title }) => {
  return (
    <div className={cls.banner_swiper}>
      <img
        className={cls.banner_swiper__img}
        src={url}
        alt={title}
      />
      <div className={cls.banner_swiper__content}>
        <p className={cls.banner_swiper__text}>
          Премьера
        </p>
        <h2 className={cls.banner_swiper__title}>
          {title}
        </h2>
      </div>
    </div>
  )
};
