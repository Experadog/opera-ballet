import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

import { path } from '../../../constants/path';
import { HeaderList } from '../../../constants/headerList';

import cls from "./Header.module.scss";

export const Header = () => {
  const [menu, setMenu] = React.useState(false);


  return (
    <div className={cls.header}>
      <div className={cls.header__container}>
        <Link to={path.HOME} className={cls.header__icon}>
          <img
            className={cls.header__img}
            src="/src/assets/icons/icon-logo.png"
            alt="Опера Балет Театры"
          />
        </Link>

        <ul className={cls.header__nav}>
          {
            HeaderList.map(({ id, caption, path }) => (
              <li key={id} className={cls.header__nav__list}>
                <NavLink
                  to={path}
                  className={cls.header__nav__item}
                  activeClassName={"active"}
                >
                  {caption}
                </NavLink>
              </li>
            ))
          }
        </ul>

        <div className={cls.header__burger} onClick={() => setMenu(prev => !prev)}>
          {
            menu
              ? <MdClose className={cls.header__burger__item} />
              : <HiMenu className={cls.header__burger__item} />
          }
        </div>
        {
          menu
            ? <ul className={cls.header__burger__nav}>
              {
                HeaderList.map(({ id, caption, path }) => (
                  <li
                    key={id}
                    className={cls.header__burger__nav__list}
                    onClick={() => setMenu(false)}
                  >
                    <NavLink
                      to={path}
                      className={cls.header__burger__nav__item}
                      activeClassName={"active"}
                    >
                      {caption}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
            : null
        }
      </div>
    </div>
  )
};
