import React from 'react'
import cls from './scenesRepertoire.module.scss'
import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'
import { UpcominCard } from './upcominPerf/UpcominPerf'
import useGetShows from '../../hooks/useGetShows'

const ScenesRepertoire = () => {
  const { scenesList } = useGetShows()

  return (
    <div className={cls.scenesRepertoire}>
      <PagesBanner title={'ближайшие спектакли'} />
      <div className={cls.container}>
        <div className={cls.scenesRepertoire__cards}>
          {scenesList.map((item) => (
            <UpcominCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScenesRepertoire
