// import React from 'react';

import cls from './footer.module.scss'

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
                    <img
                      width="14px"
                      height="14px"
                      src="/src/assets/icons/telegram-icon.svg"
                      alt=""
                    />
                    <span>Абдрахманова 167. Бишкек</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:success@gmail.com">
                    <img
                      width="14px"
                      height="14px"
                      src="/src/assets/icons/message-icon.svg"
                      alt=""
                    />
                    <span>success@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+996 312 621 619">
                    <img
                      width="14px"
                      height="14px"
                      src="/src/assets/icons/phone-icon.svg"
                      alt=""
                    />
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
                    <img
                      width="14px"
                      height="14px"
                      src="/src/assets/icons/mask-icon.svg"
                      alt=""
                    />
                    <span>Angels in the city</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      width="14px"
                      height="14px"
                      src="/src/assets/icons/mask-icon.svg"
                      alt=""
                    />
                    <span>The Color Purple</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      width="14px"
                      height="14px"
                      src="/src/assets/icons/mask-icon.svg"
                      alt=""
                    />
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
                  <img
                    width="16px"
                    height="16px"
                    src="/src/assets/icons/facebook-icon.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/opera.ballet.teatr/">
                  <img
                    width="16px"
                    height="16px"
                    src="/src/assets/icons/instagram-icon.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    width="16px"
                    height="16px"
                    src="/src/assets/icons/twitter-icon.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=6wiZw2t6WEU&ab_channel=%D0%90%D0%BB%D0%B0-%D0%A2%D0%BE%D0%BE24">
                  <img
                    width="16px"
                    height="16px"
                    src="/src/assets/icons/youtube-icon.svg"
                    alt=""
                  />
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
