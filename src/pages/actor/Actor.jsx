import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PeopleList } from '../../constants/peopleList';

import cls from "./Actor.module.scss";
import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner';

const Actor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = PeopleList.find(item => item.id === Number(id));
  const people = PeopleList.filter(item => item.id !== data.id).slice(0, 4);


  return (
    <div className={cls.actor}>
      <PagesBanner title={data.name} />
      <div className={cls.actor__wrapper}>

        <div className={cls.actor__content}>
          <div className={cls.actor__content_img}>
            <img src={data.url} alt={data.name} />
          </div>
          <h2 className={cls.actor__content_name}>
            {data.name}
          </h2>
          <p className={cls.actor__content_job}>
            {data.job}
          </p>
          <p className={cls.actor__content_bio}>
            {data.biography}
          </p>
          <div className={cls.actor__content_people}>
            <Link to={`/actor/${people[0].id}`} className={cls.actor__content_people_link}>
              {people[0].name}
            </Link>
            <div className={cls.actor__content_people_line}>|</div>
            <Link to={`/actor/${people[1].id}`} className={cls.actor__content_people_link}>
              {people[1].name}
            </Link>
          </div>
        </div>

        <div className={cls.actor__other}>
          <h2 className={cls.actor__other_title}>
            Другие актеры
          </h2>
          {
            people.map(item =>
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
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Actor;