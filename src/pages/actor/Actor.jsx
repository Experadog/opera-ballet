import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import cls from './Actor.module.scss'
import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'
import { axiosRequest } from '../../api/api'

const Actor = () => {
  const [artistsList, setArtistsList] = React.useState([])
  const [actorInfo, setActorInfo] = React.useState({})
  const [peopleList, setPeopleList] = React.useState([])
  const { id } = useParams()
  const navigate = useNavigate()

  const getArtist = React.useCallback(async () => {
    const { data } = await axiosRequest.get('/artists/')

    if (data.length === 0) {
        return []
    }

    setArtistsList(data)
    setActorInfo(data.find(item => item.id === id))
    console.log(data.find(item => item.id === id))
    setPeopleList(data.filter(item => item.id !== actorInfo.id).slice(0, 4))
  }, [])

  React.useEffect(() => {
      getArtist()
  }, [getArtist])

  return (
    <div className={cls.actor}>
      <PagesBanner title={`${actorInfo?.first_name} ${actorInfo?.last_name}`} />
      <div className={cls.actor__wrapper}>

        <div className={cls.actor__content}>
          <div className={cls.actor__content_img}>
            <img src={actorInfo?.image} alt={actorInfo?.first_name} />
          </div>
          <h2 className={cls.actor__content_name}>
            {actorInfo?.first_name}
          </h2>
          <p className={cls.actor__content_job}>
            {actorInfo?.title}
          </p>
          <p className={cls.actor__content_bio}>
            {actorInfo?.bio}
          </p>
          <div className={cls.actor__content_people}>
            <Link to={`/actor/${peopleList[0].id}`} className={cls.actor__content_people_link}>
              {peopleList[0].name}
            </Link>
            <div className={cls.actor__content_people_line}>|</div>
            <Link to={`/actor/${peopleList[1].id}`} className={cls.actor__content_people_link}>
              {peopleList[1].name}
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
                key={item.id}
                onClick={() => navigate(`/actor/${item.id}`)}
                className={cls.actor__card}
              >
                <div className={cls.actor__card_wrapper}>
                  <img
                    className={cls.actor__card_image}
                    src={item.url}
                    alt={item.name}
                  />
                </div>
                <h2 className={cls.actor__card_title}>
                  {item.name}
                </h2>
                <Link to={`/actor/${item.id}`} className={cls.actor__card_link}>
                  подробнее »
                </Link>
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
