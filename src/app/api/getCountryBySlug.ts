import { Country } from '@/types/Country'
import { notFound } from 'next/navigation'

export const getCountryBySlug = async (slug: string): Promise<Country> => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${slug}`)
    const data = await response.json()

    if (!response.ok) {
      const error = data?.message || response.status
      console.log(error)
      notFound()
    }

    return data[0]
  } catch (error) {
    console.error('There was an error!', error)
    return Promise.reject(error)
  }
}
