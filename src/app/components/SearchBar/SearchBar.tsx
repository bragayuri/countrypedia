'use client'
import { constants } from '@/constants/translations'
import React from 'react'
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
      <SearchInput
        className={styles.searchInput}
        id="search-input"
        onPressEnter={onSearch}
        onChange={onSearch}
        label={constants.homePage.search}
      />
    </div>
  )
}

export default SearchBar
