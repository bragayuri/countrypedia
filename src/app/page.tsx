import React from 'react'
import Container from './components/Container/Container'
import ResultPanel from './components/ResultPanel/ResultPanel'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './page.module.scss'

const HomePage = () => {
  return (
    <Container>
      <div className={styles.homePage}>
        <SearchBar />
        <ResultPanel />
      </div>
    </Container>
  )
}

export default HomePage
