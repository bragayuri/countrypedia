import { Country } from '@/types/Country'

export const getCountryBorders = async (country: Country) => {
  const codes = country.borders.join(',')
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${codes}`,
    )
    const data = await response.json()

    if (!response.ok) {
      const error = data?.message || response.status
      throw new Error(error)
    }

    return data
  } catch (error) {
    console.error('There was an error!', error)
    return Promise.reject(error)
  }
}
