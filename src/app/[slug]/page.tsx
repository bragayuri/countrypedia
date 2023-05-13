import React from 'react'
import Container from '@/app/components/Container/Container'
import Card, { CardData } from '../components/Card/Card'
import Grid from '../components/Grid/Grid'
import styles from './page.module.scss'
import Link from 'next/link'

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

const countryDetailsData = {
  population: '23.5490',
  languages: ['Portuguese', 'English'],
  currencies: 'Brazilian real',
  capital: 'Brasilia',
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

const CountryDetailsPage: React.FC = () => {
  return (
    <Container>
      <div className={styles.layout}>
        <h1 className={styles.pageHeading}>Country Details Page</h1>
        <Link className={styles.goBackLink} href="/">
          Go back
        </Link>
        <div className={styles.countryDetails}>
          <div className={styles.countryInfoPanel}>
            <img className={styles.flag} src={card.imageUrl} alt="flag" />
            <h5 className={styles.countryHeading}>{data.heading}</h5>
            <h6 className={styles.countrySubHeading}>{data.subHeading}</h6>
            <CountryDetailsTable data={countryDetailsData} />
          </div>
        </div>
        <h2 className={styles.borderCountriesHeading}>Bordering countries</h2>
        <div className={styles.borderCountries}>
          <div className={styles.borderCountriesPanel}>
            {data && <Grid>{cardList}</Grid>}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CountryDetailsPage

type CountryDetailsListProps = {
  data: Record<string, string | string[]>
}

const CountryDetailsTable: React.FC<CountryDetailsListProps> = ({ data }) => {
  return (
    <table className={styles.countryDetailsTable}>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <th>{key}:</th>
            <td>
              {Array.isArray(value) ? (
                <ul>
                  {value.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                value
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
