'use client'
import Card, { CardData } from '../Card/Card'
import Grid from '../Grid/Grid'
import styles from './ResultPanel.module.scss'

type CountriesData = {
  countries: Country[]
}

const ResultPanel: React.FC<CountriesData> = ({ countries }) => {
  const cardList = countries.map((country) => {
    const data: CardData = {
      heading: country.name.common,
      subHeading: country.name.official,
      paragraph: `Population: ${country.population}`,
    }

    const card = {
      id: country.cca3,
      href: `/${country.cca3}`,
      target: '',
      imageUrl: country.flags.svg,
      data,
    }

    return (
      <Card
        key={card.id}
        id={card.id}
        href={card.href}
        target={card.target}
        imageUrl={card.imageUrl}
        data={data}
      />
    )
  })

  return (
    <div className={styles.resultPanel}>
      {countries && <Grid>{cardList}</Grid>}
    </div>
  )
}

export default ResultPanel
