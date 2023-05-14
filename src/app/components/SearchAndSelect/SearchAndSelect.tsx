'use client'

import dynamic from 'next/dynamic'
import { Country } from '@/types/Country'
import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
const ResultPanel = dynamic(() => import('../ResultPanel/ResultPanel'))


const searchCountries = (countries: Country[], searchValue: string) => {
  const search = searchValue.toLowerCase()

  const filteredData = countries.filter((item) => {
    const cleaned = item.name?.common?.toLowerCase()
    return cleaned?.includes(search)
  })

  const data = filteredData.length !== 0 ? filteredData : countries

  return data
}

const SearchAndSelect = ({ countries }: { readonly countries: Country[] }) => {
  const [searchValue, setSearchValue] = useState('')
  const data = searchCountries(countries, searchValue)

  const onSearch = (value: string) => {
    const cleanedValue = value.trim().toLocaleLowerCase()
    setSearchValue(cleanedValue)
  }
  return (
    <div>
      <SearchBar setSearchValue={onSearch} />
      <ResultPanel countries={data} />
    </div>
  )
}

export default SearchAndSelect
