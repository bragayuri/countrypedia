import React from 'react'
import Container from './components/Container/Container'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './page.module.scss'

const CountryPediaHomePage = () => {
  return (
    <div className={styles.main}>
      <Container>
        <SearchBar />
        <div className={styles.resultPanel}></div>
      </Container>
    </div>
  )
}

export default CountryPediaHomePage
