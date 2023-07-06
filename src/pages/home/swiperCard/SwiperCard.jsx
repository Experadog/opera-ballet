import React from 'react';
import { Link } from 'react-router-dom';
import { CgCalendarDates } from "react-icons/cg";
import { CiMoneyCheck1 } from "react-icons/ci";

import cls from "./SwiperCard.module.scss";

export const SwiperCard = ({ title, date, price, url }) => {

  return (
    <div className={cls.swiper_card}>
      <div className={cls.swiper_card__date}>
        <CgCalendarDates />
        {date}
      </div>
      <div className={cls.swiper_card__price}>
        <CiMoneyCheck1 />
        {price}
      </div>
      <Link className={cls.swiper_card__link}>
        <img
          className={cls.swiper_card__image}
          src={url}
          alt={title}
        />
      </Link>
      <h2 className={cls.swiper_card__title}>
        {title}
      </h2>
      <div className={cls.swiper_card__ticket}>
        <button className={cls.swiper_card__btn}>
          Билеты
        </button>
      </div>
    </div>
  )
};
