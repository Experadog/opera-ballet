import React from 'react';
import { useNavigate } from 'react-router-dom';

import cls from "./ArtistsCard.module.scss";

export const ArtistsCard = ({ id, url, name, job }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/actor/${id}`)} className={cls.artists_card}>
      <div className={cls.artists_card__wrapper}>
        <img
          className={cls.artists_card__image}
          src={url}
          alt={name}
        />
      </div>
      <h2 className={cls.artists_card__title}>
        {name}
      </h2>
      <p className={cls.artists_card__job}>
        {job}
      </p>
    </div>
  )
};
