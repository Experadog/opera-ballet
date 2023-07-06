import React from 'react';

import { Banner } from './banner/Banner';
import { Welcom } from './welcom/Welcom';
import { Performances } from './performances/Performances';
import { People } from './people/People';

import cls from "./Home.module.scss";

const Home = () => {
  return (
    <div className={cls.home}>
      <Banner />
      <Welcom />
      <Performances />
      <People />
    </div>
  )
};

export default Home;