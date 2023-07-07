// import React from 'react';

import cls from "./poster.module.scss";

export default function Poster() {
  return (
    <div className={cls.poster}>
      <div className={cls.poster__banner}>
        <h2 className={cls.poster__banner__title}>hans zimmer live</h2>
      </div>
      <div className={cls.container}>
        <div className={cls.poster__left}>
          <div className={cls.poster__left__image}>
            <img src="/src/assets/img/hans-zimmer.png" alt="" />
          </div>
          <div className={cls.poster__left__content}>
            <h4 className={cls.poster__left__content__title}>
              hans zimmer live
            </h4>
            <div className={cls.poster__left__content__info}>
              <div className={cls.poster__left__content__info__icons}>
                <div>
                  <img src="/src/assets/icons/time-icon.svg" alt="" />
                  <p>July 22, 2023 19:00</p>
                </div>
                <div>
                  <img src="/src/assets/icons/price-icon.svg" alt="" />
                  <p>1000 - 2500 сом</p>
                </div>
                <div>
                  <img src="/src/assets/icons/geo-icon.svg" alt="" />
                  <p>Кыргызский театр оперы и балета им А.Малдыбаева</p>
                </div>
              </div>
              <div className={cls.poster__left__content__info__button}>
                <button>БИЛЕТ</button>
              </div>
            </div>
            <div className={cls.poster__left__description}>
              <h4>ОПИСАНИЕ</h4>
              <p>
                PERFORMANCE представляет новую программу «Hans Zimmer Live». Многие жители Бишкека и гости столицы уже знакомы с игрой большого симфонического оркестра под руководством Урмата Тентимишова! Хотим обрадовать нашего зрителя тем, что мы подготовили новую программу, вдохновившись произведениями великого композитора современности – Ханса Циммера! 22 июля 2023 г., в 19:00 Кыргызский театр оперы и балета им. А.Малдыбаева Стоимость – от 1000 – 2500 сом Билеты в кассе Театра оперы и балета «Hans Zimmer Live» — новое симфоническое шоу саундтреков, дань уважения великому композитору современности Хансу Циммеру. Каждая работа Ханса Циммера — это новая вершина в мире музыкального искусства. Не имея музыкального образования, композитор разрушил все стереотипы и стал самым успешным создателем саундтреков в Голливуде. Ханс Циммер не просто пишет музыку, он создает всю атмосферу фильма, наполняя киноленту удивительными музыкальными мотивами и аранжировками. Абсолютный новатор в творчестве. Его сотрудничество с любым режиссёром уже означает успех для фильма. Мрачный «Темный Рыцарь», фантастический «Интерстеллар», героичный «Гладиатор» и отважные «Пираты Карибского моря» — вся эта музыка не просто узнаваема, она любима зрителями. Согласитесь, слушая эти мелодии Вы вдохновлялись героями фильмов, сопереживали им, радовались за них и испытывали самые яркие эмоции! То же самое ждёт Вас и на нашем вечере!
              </p>
              <a href="#">
                BISHKEK BIG BAND
                <span>|</span>
              </a>
            </div>
          </div>

        </div>
        <div className={cls.poster__right}></div>
      </div>
    </div>
  );
}
