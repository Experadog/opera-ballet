import React from 'react'

import { Banner } from './banner/Banner'
import { Welcom } from './welcom/Welcom'
import { Performances } from './performances/Performances'
import { People } from './people/People'

import cls from './Home.module.scss'
import useGetShows from '../../hooks/useGetShows'
import Loader from '../../components/shared/loader'

const Home = () => {
  const { scenesList } = useGetShows()

  if (scenesList.length === 0) return <Loader />

  return (
    <div className={cls.home}>
      <Banner scenesList={scenesList} />
      <Welcom />
      <Performances scenesList={scenesList} />
      <People />
    </div>
  )
}

export default Home
