import React from 'react'
import Image from 'next/image'
import { HTMLAttributeAnchorTarget } from 'react'
import styles from './Card.module.scss'

export type CardData = {
  readonly heading: string
  readonly subHeading: string
  readonly paragraph: string
}

type CardProps = {
  readonly id?: string
  readonly href?: string
  readonly target?: HTMLAttributeAnchorTarget
  readonly imageUrl?: string
  readonly data: CardData
  readonly alt: string
}

const Card: React.FC<CardProps> = ({ imageUrl = '', data, alt = '' }) => {
  const { heading = '', subHeading = '', paragraph = '' } = data

  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <Image
          className={styles.image}
          src={imageUrl}
          width={0}
          height={0}
          alt={alt}
          placeholder="blur"
          blurDataURL={imageUrl}
        />
        <div className={styles.details}>
          <h5 className={styles.heading}>{heading}</h5>
          <h6 className={styles.subHeading}>{subHeading}</h6>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
