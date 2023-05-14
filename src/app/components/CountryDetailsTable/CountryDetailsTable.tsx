import React from 'react'
import { Currency, Country } from '@/types/Country'
import styles from './CountryDetailsTable.module.scss'

type CountryDetailsListProps = {
  country: Country
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

const CountryDetailsTable: React.FC<CountryDetailsListProps> = ({
  country,
}) => {
  const currencyNamesArray = getCurrencyNamesFromCountry(country)
  const countryDetailsData = {
    population: country.population.toLocaleString(),
    languages: Object.values(country.languages),
    currencies: currencyNamesArray,
    capital: country.capital,
  }

  return (
    <table className={styles.countryDetailsTable}>
      <tbody>
        {Object.entries(countryDetailsData).map(([key, value]) => (
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

export default CountryDetailsTable
