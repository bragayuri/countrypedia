import { Country } from '@/types/Country'
import { notFound } from 'next/navigation'

export const getCountryBorders = async (country: Country) => {
  if (!Object.prototype.hasOwnProperty.call(country, 'borders')) {
    return []
  }
  const codes = country.borders.join(',')
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${codes}`,
    )
    const data = await response.json()

    if (!response.ok) {
      const error = data?.message || response.status
      console.log(error)
      notFound()
    }

    return data
  } catch (error) {
    console.error('There was an error!', error)
    return Promise.reject(error)
  }
}
