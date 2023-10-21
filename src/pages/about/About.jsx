import React from 'react'

import cls from './About.module.scss'
import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'
import { Theater } from './theater/Theater'
import { axiosRequest } from '../../api/api'
import Loader from '../../components/shared/loader'

const About = () => {
  const [aboutInfo, setAboutInfo] = React.useState([])

    const getAbout = React.useCallback(async () => {
        const { data } = await axiosRequest.get('/abouts/abouts')

        if (data.length === 0) {
            return []
        }

        setAboutInfo(data[0])
    }, [])

    React.useEffect(() => {
        getAbout()
    }, [getAbout])

  return (
    <div className={cls.about}>
      <PagesBanner title="о театре" />
      {
        aboutInfo.length === 0
        ? <Loader />
        : (
          <>
            <div className={cls.about__wrapper}>
              <div className={cls.about__content}>
                <h2 className={cls.about__content_title}>
                  {aboutInfo.title}
                </h2>
                <p className={cls.about__content_text}>
                  {aboutInfo.description}
                </p>
              </div>
              <div className={cls.about__images}>
                {
            aboutInfo.image?.map((item) => (
              <img
                key={item.id}
                className={cls.about__img}
                src={item.image}
                alt="Image"
              />
            ))
          }
              </div>
            </div>
            <Theater images={aboutInfo.image} />
            <div className={cls.about__video}>
              <iframe
                width="100%"
                height="100%"
                src={aboutInfo.video_url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </>
        )
      }
    </div>
  )
}

export default About
