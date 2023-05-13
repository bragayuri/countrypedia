import { Country } from '@/types/Country'
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
