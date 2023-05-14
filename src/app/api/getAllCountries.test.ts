/**
 * @jest-environment jsdom
 */

import { getAllCountries } from './getAllCountries'
import { expect } from '@jest/globals'
import { Country } from '../../types/Country'

import fetchMock from 'jest-fetch-mock'

jest.mock('node-fetch', () => fetchMock)

describe('getAllCountries', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should return an array of countries', async () => {
    const mockCountries: Country[] = []
    const mockBody = JSON.stringify(mockCountries)

    fetchMock.mockResponseOnce(mockBody)

    const result = await getAllCountries()

    expect(result.length).toBeGreaterThan(0)
    const spain = result[0]

    expect(spain.name.common).toBe('Spain')
    expect(spain.name.official).toBe('Kingdom of Spain')
    expect(spain.tld).toEqual(['.es'])
    expect(spain.cca2).toBe('ES')
    expect(spain.currencies).toEqual({ EUR: { name: 'Euro', symbol: '€' } })
    expect(spain.capital).toEqual(['Madrid'])
    expect(spain.region).toBe('Europe')
    expect(spain.subregion).toBe('Southern Europe')
    expect(spain.languages).toEqual({ spa: 'Spanish' })
    expect(spain.flag).toBe('🇪🇸')
    expect(spain.population).toBe(47351567)
  })
})
