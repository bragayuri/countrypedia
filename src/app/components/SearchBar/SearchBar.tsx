'use client'
import { useState } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')

  const onPressEnter = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className={styles.searchBar}>
      <SearchInput
        className={styles.searchInput}
        id="search-input"
        onPressEnter={onPressEnter}
        label="Search"
      />
    </div>
  )
}

export default SearchBar
