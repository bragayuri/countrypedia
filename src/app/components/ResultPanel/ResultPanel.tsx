'use client'
import Card, { CardData } from '../Card/Card'
import Grid from '../Grid/Grid'
import styles from './ResultPanel.module.scss'

const ResultPanel = () => {
  const data: CardData = {
    heading: 'Brazil',
    subHeading: 'Federative Republic of Brazil',
    paragraph: 'Population: 23.5490',
  }

  const card = {
    id: 'br',
    href: '#',
    target: '',
    imageUrl: 'https://flagcdn.com/w320/br.png',
    data,
  }

  const cardList = Array.from({ length: 30 }, (_, index) => (
    <Card
      key={index}
      id={card.id}
      href={card.href}
      target={card.target}
      imageUrl={card.imageUrl}
      data={card.data}
    />
  ))

  return (
    <div className={styles.resultPanel}>{data && <Grid>{cardList}</Grid>}</div>
  )
}

export default ResultPanel
