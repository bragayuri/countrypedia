import { Country } from '@/types/Country'
import { Metadata } from 'next'
import React from 'react'
import { getAllCountries } from './api/getAllCountries'
import Container from './components/Container/Container'
import SearchAndSelect from './components/SearchAndSelect/SearchAndSelect'
import styles from './page.module.scss'

const HomePage = async () => {
  const countries: Country[] = await getAllCountries()

  return (
    <Container>
      <div className={styles.homePage}>
        <SearchAndSelect countries={countries} />
      </div>
    </Container>
  )
}

export default HomePage

export async function generateMetadata({ params }): Promise<Metadata> {
  const countries: Country[] = await getAllCountries()
  return {
    title: `Countrypedia - a list of ${countries.length} is available`,
  }
}

