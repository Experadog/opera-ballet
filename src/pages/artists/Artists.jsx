import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'
import { ArtistsCard } from './artistsCard/ArtistsCard'

import cls from './Artists.module.scss'
import useGetArtists from '../../hooks/useGetArtists'
import Loader from '../../components/shared/loader'

const Artists = () => {
    const { artistsList } = useGetArtists()

    return (
      <div className={cls.artists}>
        <PagesBanner title={'наши артисты'} />

        {
            artistsList.length === 0
            ? <Loader />
            : (
              <div className={cls.artists__wrapper}>
                {
                    artistsList?.map(item =>
                      <ArtistsCard key={item.id} {...item} />,
                    )
                }
              </div>
)
        }
      </div >
    )
}

export default Artists
