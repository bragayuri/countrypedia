import { constants } from '@/constants/translations'
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
        <h1 className={styles.heading}>{constants.homePage.heading}</h1>
        <SearchAndSelect countries={countries} />
      </div>
    </Container>
  )
}

export default HomePage

export async function generateMetadata(): Promise<Metadata> {
  const countries: Country[] = await getAllCountries()
  return {
    title: constants.homePage.meta.title.replace(
      '{length}',
      countries.length.toString(),
    ),
    description: constants.homePage.meta.description,
  }
}
