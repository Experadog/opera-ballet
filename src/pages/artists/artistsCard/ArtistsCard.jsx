import React from 'react'
import { useNavigate } from 'react-router-dom'

import cls from './ArtistsCard.module.scss'

export const ArtistsCard = ({ id, image, first_name, last_name, title }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/artists/${id}`)} className={cls.artists_card}>
      <div className={cls.artists_card__wrapper}>
        <img
          className={cls.artists_card__image}
          src={image}
          alt={name}
        />
      </div>
      <h2 className={cls.artists_card__title}>
        {first_name} {last_name}
      </h2>
      <p className={cls.artists_card__job}>
        {title}
      </p>
    </div>
  )
}
