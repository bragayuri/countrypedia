import { Country } from '@/types/Country'
import { notFound } from 'next/navigation'

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()

    if (!response.ok) {
      const error = data?.message || response.status
      console.log(error)
      notFound()
    }

    return data
  } catch (error) {
    console.error('There was an error!', error)
    return []
  }
}
