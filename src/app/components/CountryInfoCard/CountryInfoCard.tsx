'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './CountryInfoCard.module.scss'
import CountryDetailsTable from '../CountryDetailsTable/CountryDetailsTable'
import { Country } from '@/types/Country'
import { CardData } from '../Card/Card'
import Modal from '../Modal/Modal'

interface CountryInfoCardProps {
  country: Country
}

const CountryInfoCard: React.FC<CountryInfoCardProps> = ({ country }) => {
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
        return (
          <div key={key} className={styles.gridItem}>
            <h4>{key}</h4>
            <p>{value}</p>
          </div>
        )
      }
      return null
    })
  }

  return (
    <div className={styles.countryInfoPanel}>
      <div onClick={toggleModal}>
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

export default CountryInfoCard
