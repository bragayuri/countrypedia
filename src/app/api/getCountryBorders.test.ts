// Import necessary modules and types
import { getCountryBorders } from './getCountryBorders'
import { expect } from '@jest/globals'
import { Country } from '../../types/Country'

import fetchMock from 'jest-fetch-mock'

// Use the same jest environment
/**
 * @jest-environment jsdom
 */

jest.mock('node-fetch', () => fetchMock)

describe('getCountryBorders', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should return an array of bordering countries', async () => {
    const mockCountry = {
      borders: ['GBR'],
    } as Country

    const mockBorderCountries = [
      {
        name: {
          common: 'United Kingdom',
        },
      },
    ]
    const mockBody = JSON.stringify(mockBorderCountries)
    fetchMock.mockResponseOnce(mockBody)

    const result = await getCountryBorders(mockCountry)

    expect(result.length).toBe(mockCountry.borders.length)

    const unitedKingdom = result[0]
    expect(unitedKingdom.name.common).toBe('United Kingdom')
    expect(unitedKingdom.cca3).toBe('GBR')
    expect(unitedKingdom.cioc).toBe('GBR')
    expect(unitedKingdom.independent).toBe(true)
    expect(unitedKingdom.status).toBe('officially-assigned')
    expect(unitedKingdom.unMember).toBe(true)
    expect(unitedKingdom.idd.root).toBe('+4')
    expect(unitedKingdom.idd.suffixes).toEqual(['4'])
    expect(unitedKingdom.altSpellings).toEqual(['GB', 'UK', 'Great Britain'])
  })
})
