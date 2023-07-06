import React from 'react';

import cls from "./ArtistsCard.module.scss";

export const ArtistsCard = ({ url, name, job }) => {
  return (
    <div className={cls.artists_card}>
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
