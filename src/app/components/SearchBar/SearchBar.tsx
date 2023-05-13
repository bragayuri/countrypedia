'use client'
import { useState } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import styles from './SearchBar.module.scss'

interface SearchBarProps {
  setSearchValue: (value: string) => void
}
const SearchBar: React.FC<SearchBarProps> = ({ setSearchValue }) => {
  const onSearch = (value: string) => {
    setSearchValue(value)
  }

  return (
    <div className={styles.searchBar}>
      <h1 className={styles.heading}>Countrypedia</h1>
      <SearchInput
        className={styles.searchInput}
        id="search-input"
        onPressEnter={onSearch}
        onChange={onSearch}
        label="Search"
      />
    </div>
  )
}

export default SearchBar
