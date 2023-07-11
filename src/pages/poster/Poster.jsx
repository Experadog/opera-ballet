// import React from 'react';

import { ShowList } from "../../constants/ShowList";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

import cls from "./poster.module.scss";

export default function Poster() {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = ShowList.find((item) => item.id === Number(id));
  const show = ShowList.filter((item) => item.id !== data.id).slice(0, 3);

  return (
    <div className={cls.poster}>
      <div className={cls.poster__banner}>
        <h2 className={cls.poster__banner__title}>{data.title}</h2>
      </div>
      <div className={cls.container}>
        <div className={cls.container__flex}>
          <div className={cls.poster__left}>
            <div className={cls.poster__left__image}>
              <img src={data.url} alt={data.title} />
            </div>
            <div className={cls.poster__left__content}>
              <h4 className={cls.poster__left__content__title}>{data.title}</h4>
              <div className={cls.poster__left__content__info}>
                <div className={cls.poster__left__content__info__icons}>
                  <div>
                    <img src="/src/assets/icons/time-icon.svg" alt="" />
                    <p>{data.date}</p>
                  </div>
                  <div>
                    <img src="/src/assets/icons/price-icon.svg" alt="" />
                    <p>{data.price}</p>
                  </div>
                  <div>
                    <img src="/src/assets/icons/geo-icon.svg" alt="" />
                    <p>{data.geo}</p>
                  </div>
                </div>
                <div className={cls.poster__left__content__info__button}>
                  <button>БИЛЕТ</button>
                </div>
              </div>
              <div className={cls.poster__left__description}>
                <h4>ОПИСАНИЕ</h4>
                <p>{data.description}</p>
                <a href="#">
                  BISHKEK BIG BAND
                  <span>|</span>
                </a>
              </div>
            </div>
          </div>
          <div className={cls.poster__right}>
            <h3 className={cls.poster__right__title}>АФИША</h3>
            <div className={cls.poster__right__flex}>
              {show.map((item) => (
                <div 
                  onClick={() => navigate(`/poster/${item.id}`)}
                  key={item.id} 
                  className={cls.poster__right__flex__card}
                >
                  <div className={cls.poster__right__flex__card__link}>
                    <a>
                      <img 
                        src={item.url} 
                        alt={item.title} 
                      />
                    </a>
                  </div>
                  <h4>  
                    <Link to={`/poster/${item.id}`}>{item.title}</Link>
                  </h4>
                  <p>
                    <a href="#">{item.date}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
