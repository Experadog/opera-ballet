import React from 'react'
import cls from './scenesRepertoire.module.scss'
import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'
import { UpcominCard } from './upcominPerf/UpcominPerf'
import useGetShows from '../../hooks/useGetShows'
import Loader from '../../components/shared/loader'

const ScenesRepertoire = () => {
  const { scenesList } = useGetShows()

  return (
    <div className={cls.scenesRepertoire}>
      <PagesBanner title={'ближайшие спектакли'} />
      {
        scenesList.length === 0
        ? <Loader />
        : (
          <div className={cls.container}>
            <div className={cls.scenesRepertoire__cards}>
              {scenesList.map((item) => (
                <UpcominCard key={item.id} {...item} />
          ))}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ScenesRepertoire
