import { Country } from '@/types/Country'

export const getCountryBySlug = async (slug: string): Promise<Country> => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${slug}`)
    const data = await response.json()

    if (!response.ok) {
      const error = data?.message || response.status
      throw new Error(error)
    }

    return data[0]
  } catch (error) {
    console.error('There was an error!', error)
    return Promise.reject(error)
  }
}
