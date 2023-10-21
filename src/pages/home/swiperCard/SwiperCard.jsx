import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CgCalendarDates } from 'react-icons/cg'
import { CiMoneyCheck1 } from 'react-icons/ci'

import cls from './SwiperCard.module.scss'

export const SwiperCard = ({ id, title, date, price, image, ticket }) => {
  const navigate = useNavigate()

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
      <Link to={`/scenes/${id}`} className={cls.swiper_card__link}>
        <img
          className={cls.swiper_card__image}
          src={image}
          alt={title}
        />
      </Link>
      <h2 className={cls.swiper_card__title}>
        {title}
      </h2>
      <div className={cls.swiper_card__ticket}>
        <a href={ticket} className={cls.swiper_card__btn}>
          Билеты
        </a>
      </div>
    </div>
  )
}
