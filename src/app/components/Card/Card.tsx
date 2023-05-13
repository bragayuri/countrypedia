import Link from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'
import styles from './Card.module.scss'

export type CardData = {
  readonly heading: string
  readonly subHeading: string
  readonly paragraph: string
}

type LinkCard = {
  readonly id?: string
  readonly href?: string
  readonly target?: HTMLAttributeAnchorTarget
  readonly imageUrl?: string
  readonly data: CardData
}

const LinkCard: React.FC<LinkCard> = ({
  imageUrl = 'https://flagcdn.com/w320/br.png',
  data,
}) => {
  const { heading = '', subHeading = '', paragraph = '' } = data

  return (
    <div className={styles.linkCard}>
      <div>
        <img
          className={styles.image}
          id="link-card-image"
          src={imageUrl}
          alt="link-card-image"
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

export default LinkCard
