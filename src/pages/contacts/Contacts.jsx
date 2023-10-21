import React from 'react'

import { PagesBanner } from '../../components/shared/pagesBanner/PagesBanner'

import cls from './contacts.module.scss'
import { axiosRequest } from '../../api/api'
import Loader from '../../components/shared/loader'

const Contacts = () => {
  const [contactsList, setContactsList] = React.useState([])

    const getContacts = React.useCallback(async () => {
        const { data } = await axiosRequest.get('/abouts/contacts')

        if (data.length === 0) {
            return []
        }

        setContactsList(data)
    }, [])

    React.useEffect(() => {
      getContacts()
    }, [getContacts])

    if (contactsList.length === 0) return <Loader />

  return (
    <div className={cls.contacts}>
      <PagesBanner title={'контакты'} />
      <div className={cls.container}>
        <div className={cls.contacts__info}>
          {
            contactsList?.map(item => (
              <div key={item.id}>
                <p>
                  <strong>
                    {item?.title}
                  </strong>
                </p>
                <p>
                  {item?.description}
                </p>
              </div>
            ))
          }
        </div>

        <div className={cls.contacts__map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5847.561747144095!2d74.612767!3d42.877469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x1d688811cd946d10!2zVkpINis3Vywg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1688640966670!5m2!1sru!2skg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contacts
