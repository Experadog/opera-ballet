// import React from 'react';

import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'

import cls from './contacts.module.scss'

const Contacts = () => {
  return (
    <div className={cls.contacts}>
      <PagesBanner title={'контакты'} />
      <div className={cls.container}>
        <div className={cls.contacts__info}>
          <div>
            <p>
              <strong>
                Единый телефон касс Опера и балет 0312 621 619 ,
                admin@operabalet.kg
              </strong>
            </p>

            <p>
              <strong>Администрация 0312 621 619</strong>
            </p>
            <p>Главного администратора — ____________________</p>
            <p>
              <strong>
                _______________________________________________________________
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                Адреса Кыргызский национальный академический театр оперы и
                балета им. Абдыласа Малдыбаева
              </strong>
            </p>
            <p>Бишкек, , Улица Юсупа Абдрахманова, 167</p>
            <p>
              Касса: <strong>0312 621 619</strong>
            </p>
            <p>Ежедневно с 10 до 21 часа (перерыв на обед с 15 до 16 часов)</p>
            <p>
              Администрация: <strong>Администрация: 0312 621 619</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                По вопросам групповых заказов и корпоративных мероприятий
                обращайтесь в отдел продаж: 0312 621 619 график работы ПН-ПТ с
                11:00-19:00
              </strong>
            </p>
            <p>
              <strong>welcome@operabalet.kg</strong>
            </p>
            <p>
              <strong>
                Кыргызский национальный академический театр оперы и балета им.
                Абдыласа Малдыбаева
              </strong>
            </p>
          </div>
          <div>
            <p>
              <strong>Дирекция</strong>
            </p>
            <p>Начальник орготдела — ________________</p>
            <p>
              <strong>dir@operabalet.kg</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>Личный прием граждан директором театра</strong>
            </p>
            <p>Каждый второй вторник месяца с 16:00 до 17:00</p>
            <p>
              Запись на прием к директору осуществляется секретарем не позднее,
              чем за 5 рабочих дней до визита. В случае отсутствия директора
              (командировка, гастроли, отпуск и т.д.) прием ведет заместитель
              директора.
            </p>
          </div>
          <div>
            <p>
              <strong>Приёмная художественного руководителя</strong>
            </p>
            <p>Помощник художественного руководителя — ________________</p>
            <p>
              <strong>priem@operabalet.kg</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>
                Приёмная Президента организации культуры и искусства
              </strong>
            </p>
            <p>Помощник — _____________</p>
            <p>
              <strong>dir@operabalet.kg</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>Связи с общественностью</strong>
            </p>
            <p>Художественный редактор — ________________</p>
            <p>
              <strong>pr@operabalet.kg</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>Для авторов:</strong>
            </p>
            <p>Руководитель литературно-драматургической части</p>
          </div>
          <div>
            <p>________________</p>
            <p>
              <strong>0312 621 619 avtor@operabalet.kg</strong>
            </p>
            <p>
              Обращаем внимание авторов: пьесы, присланные по электронной почте
              без предварительной договоренности с руководителем
              литературно-драматургической части, к рассмотрению не принимаются.
            </p>
          </div>
          <div>
            <p>
              <strong>Театру требуются:</strong>
            </p>
            <p>В настоящее время вакансий нет.</p>
            <p>
              Актерские прослушивания в этом театральном сезоне не проводятся.
            </p>
          </div>
          <div>
            <p>
              <strong>
                Администрация сайта принимает пожелания и замечания по качеству
                работы портала: admin@operabalet.kg
              </strong>
            </p>
          </div>
        </div>

        <div className={cls.contacts__map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5847.561747144095!2d74.612767!3d42.877469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x1d688811cd946d10!2zVkpINis3Vywg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1688640966670!5m2!1sru!2skg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contacts
