/* eslint-disable */
import { getCountryBySlug } from './getCountryBySlug'
import { expect } from '@jest/globals'
import { Country } from '../../types/Country'

import fetchMock from 'jest-fetch-mock'

/**
 * @jest-environment jsdom
 */

jest.mock('node-fetch', () => fetchMock)

describe('getCountryBySlug', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should return a country by slug', async () => {
    const mockCountry = {
      name: {
        common: 'Ireland',
        official: 'Republic of Ireland',
      },
      tld: ['.ie'],
      cca2: 'IE',
    } as Country

    const mockBody = JSON.stringify([mockCountry])
    fetchMock.mockResponseOnce(mockBody)

    const result = await getCountryBySlug('IE')

    expect(result.name.common).toBe('Ireland')
    expect(result.name.official).toBe('Republic of Ireland')
    expect(result.tld).toEqual(['.ie'])
    expect(result.cca2).toBe('IE')
  })
})
