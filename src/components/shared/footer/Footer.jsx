// import React from 'react';


import cls from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={cls.container}>
        <div className={cls.footer__top}>
          <div className={cls.footer__top__left}>
            <div className={cls.footer__top__left__contacts}>
              <h2>Контакты</h2>
            </div>
            <div className={cls.footer__top__left__elements}>
              <ul>
                <li>
                  <a href="#">
                    <img width="14px" height="14px" src="/src/assets/icons/telegram-icon.svg" alt=""/>
                  </a>
                  <span>
                    Абдрахманова 167. Бишкек
                  </span>
                </li>
                <li>
                  <a href="#">
                    <img width="14px" height="14px" src="/src/assets/icons/message-icon.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={cls.footer__top__right}>
            
          </div>
        </div>
        <div className={cls.footer__bottom}>
          <div className={cls.footer__bottom__icons}>

          </div>
          <div className={cls.footer__bottom__about}>
            
          </div>
        </div>
      </div>
    </footer>
  )
};