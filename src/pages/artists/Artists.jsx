import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'
import { ArtistsCard } from './artistsCard/ArtistsCard'

import cls from './Artists.module.scss'
import useGetArtists from '../../hooks/useGetArtists'

const Artists = () => {
    const { artistsList } = useGetArtists()

    return (
      <div className={cls.artists}>
        <PagesBanner title={'наши артисты'} />

        {
            artistsList.length === 0
            ? <h1 style={{ color: 'white' }}>Loading...</h1>
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
