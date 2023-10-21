import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CgCalendarDates } from 'react-icons/cg'
import { CiMoneyCheck1 } from 'react-icons/ci'

import cls from './UpcominPerf.module.scss'

export const UpcominCard = ({ id, title, date, price, image, ticket }) => {
  const navigate = useNavigate()

  return (
    <div className={cls.upcomin_card}>
      <div className={cls.upcomin_card__date}>
        <CgCalendarDates />
        {date}
      </div>
      <div className={cls.upcomin_card__price}>
        <CiMoneyCheck1 />
        {price}
      </div>
      <Link to={`/scenes/${id}`} className={cls.upcomin_card__link}>
        <img className={cls.upcomin_card__image} src={image} alt={title} />
      </Link>
      <h2 className={cls.upcomin_card__title}>{title}</h2>
      <div className={cls.upcomin_card__ticket}>
        <a href={ticket} className={cls.upcomin_card__btn}>Билеты</a>
      </div>
    </div>
  )
}
