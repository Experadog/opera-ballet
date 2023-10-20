import React from 'react';

import cls from "./PeopleCard.module.scss";
import { useNavigate } from 'react-router-dom';

export const PeopleCard = ({ id, image, first_name, last_name, title }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/actor/${id}`)} className={cls.people_card}>
      <div className={cls.people_card__wrapper}>
        <img
          className={cls.people_card__image}
          src={image}
          alt={first_name}
        />
      </div>
      <h2 className={cls.people_card__title}>
        {first_name} {last_name}
      </h2>
      <p className={cls.people_card__job}>
        {title}
      </p>
    </div>
  )
};
