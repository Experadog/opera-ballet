// import React from 'react';

import { ShowList } from "../../../constants/ShowList";

import cls from "./posterCard.module.scss";

export default function PosterCard({url, title, date}) {
  return (
    <div className={cls.poster__right__flex__card}>
      <div className={cls.poster__right__flex__card__link}>
        <a href="#">
          <img src={url} alt={title} />
        </a>
      </div>
      <h4>
        <a href="#">{title}</a>
      </h4>
      <p>
        <a href="#">{date}</a>
      </p>
    </div>
  )
}