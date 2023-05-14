'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './CountryInfoManager.module.scss'
import CountryDetailsTable from '../CountryDetailsTable/CountryDetailsTable'
import { Country } from '@/types/Country'
import { CardData } from '../Card/Card'
import Modal from '../Modal/Modal'

interface CountryInfoManagerProps {
  country: Country
}

const CountryInfoManager: React.FC<CountryInfoManagerProps> = ({ country }) => {
  const [showModal, setShowModal] = useState(false)

  const data: CardData = {
    heading: country.name.common,
    subHeading: country.name.official,
    paragraph: `Population: ${country.population.toLocaleString()}`,
  }
  const card = {
    id: country.cca3,
    href: '#',
    target: '',
    imageUrl: country.flags.svg,
    data,
  }

  const toggleModal = () => setShowModal(!showModal)

  const createGridItems = () => {
    return Object.entries(country).map(([key, value]) => {
      if (typeof value === 'string') {
        const options: Record<string, string> = {
          cca2: 'Code 1',
          ccn3: 'Code 2',
          cca3: 'Code 3',
          cioc: 'Country IOC',
          status: 'Status',
          region: 'Region',
          subregion: 'Subregion',
          flag: 'Flag',
          fifa: 'FIFA coda',
          startOfWeek: '1st week day',
        }
        return (
          <div key={key} className={styles.gridItem}>
            <h4>{options[key]}</h4>
            <p>{value}</p>
          </div>
        )
      }
      return null
    })
  }

  return (
    <div className={styles.countryInfoPanel}>
      <div className={styles.imageWrapper} onClick={toggleModal}>
        <Image
          className={styles.flag}
          src={card.imageUrl}
          width={286}
          height={143}
          alt={`${country.name.common}-flag`}
        />
        <h5 className={styles.countryHeading}>{data.heading}</h5>
        <h6 className={styles.countrySubHeading}>{data.subHeading}</h6>
        <span></span>
        <CountryDetailsTable country={country} />
      </div>
      {showModal && (
        <Modal open={showModal} onClose={toggleModal}>
          <div className={styles.gridContainer}>{createGridItems()}</div>
        </Modal>
      )}
    </div>
  )
}

export default CountryInfoManager
