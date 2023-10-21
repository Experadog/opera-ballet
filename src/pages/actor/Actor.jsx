import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import cls from './Actor.module.scss'
import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'
import useGetArtists from '../../hooks/useGetArtists'
import Loader from '../../components/shared/loader'

const Actor = () => {
  const { id } = useParams()
  const { artistsList } = useGetArtists()
  const actorInfo = artistsList.find(item => item.id === +id)
  const peopleList = artistsList.filter(item => item.id !== actorInfo.id).slice(0, 4)
  const navigate = useNavigate()

  if (artistsList.length === 0) return <Loader />

  return (
    <div className={cls.actor}>
      <PagesBanner title={`${actorInfo?.first_name} ${actorInfo?.last_name}`} />
      <div className={cls.actor__wrapper}>

        <div className={cls.actor__content}>
          <div className={cls.actor__content_img}>
            <img src={actorInfo?.image} alt={actorInfo?.first_name} />
          </div>
          <h2 className={cls.actor__content_name}>
            {actorInfo?.first_name} {actorInfo?.last_name}
          </h2>
          <p className={cls.actor__content_job}>
            {actorInfo?.title}
          </p>
          <p className={cls.actor__content_bio}>
            {actorInfo?.bio}
          </p>
          <div className={cls.actor__content_people}>
            <Link to={`/artists/${peopleList[0]?.id}`} className={cls.actor__content_people_link}>
              {peopleList[0]?.first_name} {peopleList[0]?.last_name}
            </Link>
            <div className={cls.actor__content_people_line}>|</div>
            <Link to={`/artists/${peopleList[1]?.id}`} className={cls.actor__content_people_link}>
              {peopleList[1]?.first_name} {peopleList[1]?.last_name}
            </Link>
          </div>
        </div>

        <div className={cls.actor__other}>
          <h2 className={cls.actor__other_title}>
            Другие актеры
          </h2>
          {
            peopleList?.map(item => (
              <div
                key={item?.id}
                onClick={() => navigate(`/artists/${item?.id}`)}
                className={cls.actor__card}
              >
                <div className={cls.actor__card_wrapper}>
                  <img
                    className={cls.actor__card_image}
                    src={item?.image}
                    alt={item?.first_name}
                  />
                </div>
                <h2 className={cls.actor__card_title}>
                  {item?.first_name} {item?.last_name}
                </h2>
                <a className={cls.actor__card_link}>
                  подробнее »
                </a>
              </div>
            ),
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Actor
