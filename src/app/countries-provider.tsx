'use client'

import React, { createContext, ReactNode } from 'react'

interface CountriesDataContextProps {
  children: ReactNode
  countries: Country[]
}

export const CountriesDataContext = createContext<Country[]>([])

export default function CountriesDataProvider({
  children,
  countries,
}: CountriesDataContextProps) {
  return (
    <CountriesDataContext.Provider value={countries}>
      {children}
    </CountriesDataContext.Provider>
  )
}
