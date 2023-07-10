import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import AOS from 'aos';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import classNames from 'classnames';

import { BannerList } from '../../../constants/bannerList';
import { BannerSwiper } from './bannerSwiper/BannerSwiper';

import cls from "./Banner.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';
import 'aos/dist/aos.css';

export const Banner = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const bannerContent = BannerList[activeIndex];


  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  React.useEffect(() => {
    AOS.init();
  }, [activeIndex]);

  return (
    <div style={{
      backgroundImage: `url(${bannerContent.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className={cls.banner}>
      <div className={cls.banner__wrapper}>
        <div data-aos="fade-left" className={cls.banner__dots}>
          {
            BannerList.map((item, index) =>
              <div key={item.id} className={cls.banner__dot} >
                <div className={classNames(cls.banner__dot_block, {
                  "banner__dot_active": index === activeIndex
                })}>
                  <div className={classNames(cls.banner__dot_number, {
                    "banner__dot_number_active": index === activeIndex
                  })}>
                    {item.id}
                  </div>
                </div>
              </div>
            )
          }
        </div>

        <div className={cls.banner__content}>
          <h2 data-aos="fade-up" className={cls.banner__content_title}>
            {bannerContent.title}
          </h2>
          <p data-aos="fade-up" className={cls.banner__content_date}>
            {bannerContent.date}
          </p>
          <div data-aos="fade-up" className={cls.banner__content_info}>
            <div className={cls.banner__content_duration}>
              <AiOutlineClockCircle /> Продолжительность: {bannerContent.duration}
            </div>
            <div className={cls.banner__content_price}>
              <ImPriceTag /> Стоимость: {bannerContent.price}
            </div>
            <div className={cls.banner__content_address}>
              <FaMapMarkerAlt />  {bannerContent.address}
            </div>
          </div>
          <div>
            <button data-aos="fade-up" className={cls.banner__content_btn}>
              Подробнее
            </button>
          </div>
        </div>

        <Swiper
          data-aos="fade-left"
          className={cls.banner__swipe}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={8}
          slidesPerView={2}
          slidesPerGroup={1}
          // loop={true}
          autoplay={{ delay: 2000 }}
          speed={1000}
          direction='horizontal'
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => handleSlideChange(swiper)}
        >
          {
            BannerList.map(item =>
              <>
                <SwiperSlide key={item.id}>
                  <BannerSwiper activeIndex={activeIndex} {...item} />
                </SwiperSlide>
              </>
            )
          }
        </Swiper>
      </div>
      <div className={cls.banner__buttons}>
        <FiArrowLeft className={cls.banner__buttons_btn} />
        <FiArrowRight className={cls.banner__buttons_btn} />
      </div>
    </div>
  )
};
