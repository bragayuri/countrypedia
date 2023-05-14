'use client'
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import styles from './SearchInput.module.scss'
import searchIcon from 'src/assets/svg/searchIcon.svg'
import SearchIcon from '../Icon/Icon'

export type ISetState<T> = (obj: Partial<T>) => void

type SearchInputProps = {
  readonly id: string
  readonly className?: string
  readonly label?: string
  readonly onChange?: (value: string) => void
  readonly onFocus?: (e: SyntheticEvent) => void
  readonly value?: string
  readonly searchValue?: string
  readonly setState?: ISetState<{ searchValue: string }>
  readonly onPressEnter?: (value: string) => void
  readonly onBlur?: (value: string) => void
}
const SearchInput: React.FC<SearchInputProps> = ({
  id,
  className,
  label,
  onChange,
  onFocus,
  value = '',
  searchValue,
  setState,
  onPressEnter,
  onBlur,
}) => {
  const [inputValue, setInputValue] = useState(value)

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event && event.key === 'Enter') {
      const value = (event.target as HTMLInputElement).value

      if (onPressEnter) {
        onPressEnter(value)
        return
      }

      if (!setState) return
      setState({ searchValue: value })
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange?.(inputValue)
    }, 1000)
    return () => clearTimeout(timer)
  }, [inputValue, onChange])

  useEffect(() => {
    if (searchValue) setInputValue(searchValue)
  }, [searchValue])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) =>
    onBlur?.(e.target.value)

  return (
    <div className={`${styles.searchInput} ${className}`}>
      <SearchIcon
        id="searchIcon"
        className={styles.searchIcon}
        svg={searchIcon}
        width={15}
        height={15}
        alt="search-icon"
      />
      <div className={styles.divider} />
      <label data-floating={!!inputValue}>{label}</label>
      <input
        id={id}
        type="text"
        onChange={handleChange}
        value={inputValue}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default SearchInput
