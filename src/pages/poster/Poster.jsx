import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { BiTimeFive, BiMoney, BiSolidPaperPlane } from 'react-icons/bi'

import cls from './poster.module.scss'
import useGetShows from '../../hooks/useGetShows'
import Loader from '../../components/shared/loader'

export default function Poster () {
  const { id } = useParams()
  const { scenesList } = useGetShows()
  const navigate = useNavigate()
  const data = scenesList.find(item => item.id === +id)
  const show = scenesList.filter((item) => item.id !== data.id).slice(0, 3)

  if (scenesList.length === 0) return <Loader />

  return (
    <div className={cls.poster}>
      <div className={cls.poster__banner}>
        <h2 className={cls.poster__banner__title}>{data?.title}</h2>
      </div>
      <div className={cls.container}>
        <div className={cls.container__flex}>
          <div className={cls.poster__left}>
            <div className={cls.poster__left__image}>
              <img src={data?.image} alt={data?.title} />
            </div>
            <div className={cls.poster__left__content}>
              <h4 className={cls.poster__left__content__title}>{data?.title}</h4>
              <div className={cls.poster__left__content__info}>
                <div className={cls.poster__left__content__info__icons}>
                  <div>
                    < BiTimeFive style={{ color: 'orange' }} />
                    <p>{data?.date}</p>
                  </div>
                  <div>
                    < BiMoney style={{ color: 'orange' }} />
                    <p>{data?.price}</p>
                  </div>
                  <div>
                    < BiSolidPaperPlane style={{ color: 'orange' }} />
                    <p>{data?.location}</p>
                  </div>
                </div>
                <div className={cls.poster__left__content__info__button}>
                  <a href={data?.ticket}>БИЛЕТ</a>
                </div>
              </div>
              <div className={cls.poster__left__description}>
                <h4>ОПИСАНИЕ</h4>
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
          <div className={cls.poster__right}>
            <h3 className={cls.poster__right__title}>АФИША</h3>
            <div className={cls.poster__right__flex}>
              {show.map((item) => (
                <div
                  key={item.id}
                  className={cls.poster__right__flex__card}
                >
                  <div className={cls.poster__right__flex__card__link}>
                    <Link to={`/scenes/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </Link>
                  </div>
                  <h4>
                    <Link to={`/scenes/${item.id}`}>{item.title}</Link>
                  </h4>
                  <p>
                    <a>{item.date}</a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
