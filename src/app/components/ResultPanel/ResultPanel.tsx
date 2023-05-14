'use client'
import { ROUTES } from '@/constants/routes'
import { Country } from '@/types/Country'
import { slugify } from '@/utils/helpers'
import Link from 'next/link'

import Card, { CardData } from '../Card/Card'
import Grid from '../Grid/Grid'
import styles from './ResultPanel.module.scss'

const ResultPanel = ({ countries }: { countries: Country[] }) => {
  const cardList = countries.map((country) => {
    const { cca3: id } = country
    const slug = slugify(id)
    const data: CardData = {
      heading: country.name.common,
      subHeading: country.name.official,
      paragraph: `Population: ${country.population.toLocaleString()}`,
    }

    const card = {
      id,
      href: `/${country.cca3.toLowerCase()}`,
      target: '',
      imageUrl: country.flags.svg,
      data,
    }

    return (
      <Link
        key={id}
        id={id}
        href={ROUTES.COUNTRY_DETAILS.replace('slug', slug)}
      >
        <Card
          id={id}
          imageUrl={card.imageUrl}
          data={data}
          alt={`${country.name.common}`}
        />
      </Link>
    )
  })

  return (
    <div className={styles.resultPanel}>
      {countries && <Grid>{cardList}</Grid>}
    </div>
  )
}

export default ResultPanel
