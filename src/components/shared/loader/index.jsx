import React from 'react'
import cls from './index.module.scss'

const Loader = () => {
    return (
      <div style={{ background: 'black' }} className={cls.loader}>
        <div className={cls.lds_ring}><div></div><div></div><div></div><div></div></div>
      </div>
    )
}

export default Loader
