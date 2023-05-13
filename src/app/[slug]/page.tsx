'use client'

import React, { useContext } from 'react'
import Container from '@/app/components/Container/Container'
import Card, { CardData } from '../components/Card/Card'
import Grid from '../components/Grid/Grid'
import styles from './page.module.scss'
import Link from 'next/link'
import { CountriesDataContext } from '../countries-provider'

// const cardList = Array.from({ length: 30 }, (_, index) => (
//   <Card
//     key={index}
//     id={card.id}
//     href={card.href}
//     target={card.target}
//     imageUrl={card.imageUrl}
//     data={card.data}
//   />
// ))

type CountryDetailsProps = {
  readonly params: {
    slug: string
  }
}

type Currency = {
  readonly name: string
  readonly symbol: string
}

const getCurrencyNamesFromCountry = (country?: {
  currencies: { [id: string]: Currency }
}): string[] => {
  const currenciesId = country?.currencies
    ? Object.keys(country.currencies)
    : []
  const hasCurrency = currenciesId.length > 0

  const currencies: Currency[] = hasCurrency
    ? currenciesId.reduce((acc: Currency[], id) => {
        if (country?.currencies) {
          const currency = country.currencies[id]
          if (currency) {
            acc.push(currency)
          }
        }
        return acc
      }, [])
    : []

  const currencyNamesArray = currencies.map(
    (currency: Currency) => currency.name,
  )

  return currencyNamesArray
}

const CountryDetailsPage: React.FC<CountryDetailsProps> = ({ params }) => {
  const countries = useContext(CountriesDataContext)
  const country = countries.find(
    (country) => country.cca3.toLowerCase() === params.slug,
  )

  if (!country) return <div>Loading</div>

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
  const currencyNamesArray = getCurrencyNamesFromCountry(country)

  const countryDetailsData = {
    population: country.population.toLocaleString(),
    languages: Object.values(country.languages),
    currencies: currencyNamesArray,
    capital: country.capital,
  }

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
            {/* {data && <Grid>{cardList}</Grid>} */}
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
