import { Country } from '@/types/Country'
import React from 'react'
import { getAllCountries } from './api/getAllCountries'
import Container from './components/Container/Container'
import ResultPanel from './components/ResultPanel/ResultPanel'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './page.module.scss'

const HomePage = async () => {
  const countries: Country[] = await getAllCountries()
  return (
    <Container>
      <div className={styles.homePage}>
        <SearchBar />
        <ResultPanel countries={countries} />
      </div>
    </Container>
  )
}

export default HomePage
