import React from 'react';
import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner';
import { PeopleList } from '../../constants/peopleList';
import { ArtistsCard } from './artistsCard/ArtistsCard';

import cls from "./Artists.module.scss";

const Artists = () => {
  return (
    <div className={cls.artists}>
      <PagesBanner title={"наши артисты"} />
      <div className={cls.artists__wrapper}>
        {
          PeopleList.map(item =>
            <ArtistsCard key={item.id} {...item} />
          )
        }
      </div>
    </div >
  )
};

export default Artists;