import React from 'react';

import cls from "./PeopleCard.module.scss";
import { useNavigate } from 'react-router-dom';

export const PeopleCard = ({ id, url, name, job }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/actor/${id}`)} className={cls.people_card}>
      <div className={cls.people_card__wrapper}>
        <img
          className={cls.people_card__image}
          src={url}
          alt={name}
        />
      </div>
      <h2 className={cls.people_card__title}>
        {name}
      </h2>
      <p className={cls.people_card__job}>
        {job}
      </p>
    </div>
  )
};
