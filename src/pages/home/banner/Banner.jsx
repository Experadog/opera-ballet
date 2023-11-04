import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { ImPriceTag } from 'react-icons/im'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import AOS from 'aos'

import { BannerSwiper } from './bannerSwiper/BannerSwiper'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'

import cls from './Banner.module.scss'
import 'swiper/css'
import 'swiper/css/bundle'
import 'aos/dist/aos.css'

export const Banner = ({ scenesList }) => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const bannerContent = scenesList[activeIndex]
  const navigate = useNavigate()

  const handleSlideChange = (swiper) => {
    if (typeof swiper.realIndex === 'number' && !isNaN(swiper.realIndex)) {
      setActiveIndex(swiper.realIndex)
    } else {
      setActiveIndex(0)
    }
  }

  React.useEffect(() => {
    AOS.init()
  }, [activeIndex])

  console.log(bannerContent)
  return (
    <div style={{
      backgroundImage: `url(${bannerContent?.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className={cls.banner}
    >
      <div className={cls.banner__wrapper}>
        <div data-aos="fade-left" className={cls.banner__dots}>
          {
            scenesList?.map((item, index) => (
              <div key={item?.id} className={cls.banner__dot} >
                <div className={classNames(cls.banner__dot_block, {
                  banner__dot_active: index === activeIndex,
                })}
                >
                  <div className={classNames(cls.banner__dot_number, {
                    banner__dot_number_active: index === activeIndex,
                  })}
                  >
                    {item?.id}
                  </div>
                </div>
              </div>
            ),
            )
          }
        </div>

        <div className={cls.banner__content}>
          <h2 data-aos="fade-up" className={cls.banner__content_title}>
            {bannerContent?.title}
          </h2>
          <p data-aos="fade-up" className={cls.banner__content_date}>
            {bannerContent?.date}
          </p>
          <div data-aos="fade-up" className={cls.banner__content_info}>
            <div className={cls.banner__content_duration}>
              <AiOutlineClockCircle /> Продолжительность: {bannerContent?.duration}
            </div>
            <div className={cls.banner__content_price}>
              <ImPriceTag /> Стоимость: {bannerContent?.price}
            </div>
            <div className={cls.banner__content_address}>
              <FaMapMarkerAlt />  {bannerContent?.location}
            </div>
          </div>
          <div>
            <button
              onClick={() => navigate(`/scenes/${bannerContent?.id}`)}
              data-aos="fade-up"
              className={cls.banner__content_btn}
            >
              Подробнее
            </button>
          </div>
        </div>

        <Swiper
          className={cls.banner__swipe}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={8}
          slidesPerView={2}
          slidesPerGroup={1}
          loop={true}
          navigation={{ nextEl: '.swiper-button-next-banner', prevEl: '.swiper-button-prev-banner' }}
          pagination={{ el: '.swiper-pagination-banner', clickable: true }}
          autoplay={{ delay: 3000 }}
          speed={1500}
          direction="horizontal"
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => handleSlideChange(swiper)}
        >
          {
            scenesList?.map(item => (
              <SwiperSlide className={'swiper-button-next-banner'} key={item.id}>
                <BannerSwiper activeIndex={activeIndex} {...item} />
              </SwiperSlide>
            ),
            )
          }
        </Swiper>
      </div>
      <div className={cls.banner__buttons}>
        <FiArrowLeft className={classNames(cls.banner__buttons_btn, 'swiper-button-prev-banner')} />
        <FiArrowRight className={classNames(cls.banner__buttons_btn, 'swiper-button-next-banner')} />
      </div>
    </div>
  )
}
