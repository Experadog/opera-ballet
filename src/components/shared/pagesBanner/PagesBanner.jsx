import React from 'react'

import cls from './pagesBanner.module.scss'

export const PagesBanner = ({ title }) => {
  return (
    <>
      <div className={cls.black__banner}>
        <h2>{title}</h2>
      </div>
    </>
  )
}
