import React from 'react'

import cls from './BannerSwiper.module.scss'
import classNames from 'classnames'

export const BannerSwiper = ({ activeIndex, id, image, title }) => {
  console.log(id)
  console.log(activeIndex)
  return (
    <div className={classNames(cls.banner_swiper, {
      banner_swiper__active: id === activeIndex + 1,
    })}
    >
      <img
        className={cls.banner_swiper__img}
        src={image}
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
}
