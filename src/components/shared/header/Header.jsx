import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { path } from '../../../constants/path';
import { HeaderList } from '../../../constants/headerList';

import cls from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={cls.header}>
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
              >
                {caption}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
};
