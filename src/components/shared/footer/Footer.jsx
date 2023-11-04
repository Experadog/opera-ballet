import React from 'react'
import cls from './footer.module.scss'

import { BiLogoTelegram } from 'react-icons/bi'
import { AiFillMessage } from 'react-icons/ai'
import { BsFillTelephoneFill, BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { PiMaskHappyFill } from 'react-icons/pi'
import { FaTheaterMasks } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      <div className={cls.container}>
        <div className={cls.footer__top}>
          <div className={cls.footer__top__left}>
            <h2 className={cls.footer__top__left__title}>Контакты</h2>
            <div className={cls.footer__top__left__elements}>
              <ul>
                <li>
                  <a href="#">
                    <BiLogoTelegram style={{ color: 'orange' }} />
                    <span>Абдрахманова 167. Бишкек</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:success@gmail.com">
                    < AiFillMessage style={{ color: 'orange' }} />
                    <span>success@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+996 312 621 619">
                    < BsFillTelephoneFill style={{ color: 'orange' }} />
                    <span>контакты: +996 312 621 619</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={cls.footer__top__right}>
            <h2 className={cls.footer__top__right__title}>Шоу</h2>
            <div className={cls.footer__top__right__elements}>
              <ul>
                <li>
                  <a href="#">
                    <FaTheaterMasks style={{ color: 'orange' }} />
                    <span>Angels in the city</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTheaterMasks style={{ color: 'orange' }} />
                    <span>The Color Purple</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTheaterMasks style={{ color: 'orange' }} />
                    <span>Anatomy of a Suicide</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cls.footer__bottom}>
          <div className={cls.footer__bottom__icons}>
            <ul>
              <li>
                <a href="https://www.facebook.com/bishkek.operaballet">
                  <BsFacebook style={{ color: 'orange' }} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/opera.ballet.teatr/">
                  < BsInstagram style={{ color: 'orange' }} />
                </a>
              </li>
              <li>
                <a href="#">
                  < BsTwitter style={{ color: 'orange' }} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=6wiZw2t6WEU&ab_channel=%D0%90%D0%BB%D0%B0-%D0%A2%D0%BE%D0%BE24">
                  < BsYoutube style={{ color: 'orange' }} />
                </a>
              </li>
            </ul>
          </div>
          <div className={cls.footer__bottom__about}>
            <h2 className={cls.footer__bottom__about__title}>Theater</h2>
            <p>
              ©Opera Ballet web-site 2023. All Rights Reserved. Developed by
              <a href="https://ak.soonun.com/developers/">Team Jaratabyz</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
