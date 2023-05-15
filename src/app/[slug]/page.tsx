import React from 'react'
import Container from '@/app/components/Container/Container'
import Card, { CardData } from '../components/Card/Card'
import styles from './page.module.scss'
import Link from 'next/link'
import { getCountryBySlug } from '../api/getCountryBySlug'
import { Country } from '@/types/Country'
import { getCountryBorders } from '../api/getCountryBorders'
import { Metadata } from 'next'
import Icon from '../components/Icon/Icon'
import arrowLeftIcon from 'src/assets/svg/arrowLeftIcon.svg'
import { slugify } from '@/utils/helpers'
import { ROUTES } from '@/constants/routes'
import Carousel from '../components/Carousel/Carousel'
import CountryInfoCard from '../components/CountryInfoCard/CountryInfoManager'
import { constants } from '@/constants/translations'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

type CountryDetailsProps = {
  readonly slug: string
}

const CountryDetailsPage = async ({
  params,
}: {
  readonly params: CountryDetailsProps
}) => {
  const country: Country = await getCountryBySlug(params.slug)
  const borderCountries = await getCountryBorders(country)
  const hasBorderCountries = borderCountries.length > 0

  const getCards = () => {
    return borderCountries.map((borderCountry: Country) => {
      const { cca3: id } = borderCountry
      const slug = slugify(id)
      const borderData: CardData = {
        heading: borderCountry.name.common,
        subHeading: borderCountry.name.official,
        paragraph: `Population: ${borderCountry.population.toLocaleString()}`,
      }
      return (
        <Link
          key={id}
          id={id}
          href={ROUTES.COUNTRY_DETAILS.replace('slug', slug)}
          as={ROUTES.COUNTRY_DETAILS.replace('slug', slug)}
        >
          <Card
            imageUrl={borderCountry.flags.svg}
            data={borderData}
            alt={`${borderCountry.name?.common}-flag`}
          />
        </Link>
      )
    })
  }

  return (
    <Container>
      <div className={styles.layout}>
        <h1 className={styles.pageHeading}>
          {constants.detailsPage.heading} -{' '}
          {country.name?.common ? country.name.common : ''}
        </h1>
        <Link className={styles.goBackLink} href={ROUTES.HOME} as={ROUTES.HOME}>
          <div className={styles.goBack}>
            <Icon
              height={30}
              width={30}
              id="go-back-icon"
              svg={arrowLeftIcon}
              alt="Go back icon"
            />
            <span>{constants.detailsPage.goBack}</span>
          </div>
        </Link>
        <div className={styles.countryDetails}>
          <CountryInfoCard country={country} />
        </div>
        <h2 className={styles.borderCountriesHeading}>
          {constants.detailsPage.borderingCountry}
        </h2>

        <div className={styles.borderCountries}>
          <div className={styles.borderCountriesPanel}>
            {!hasBorderCountries ? (
              <div className={styles.noBorderPlaceholder}>
                <h3>{constants.detailsPage.noBorderingCountry}</h3>
              </div>
            ) : (
              <Carousel cards={getCards()}></Carousel>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CountryDetailsPage

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.slug

  const country: Country = await getCountryBySlug(id)
  const title = constants.detailsPage.meta.title
    .replace('{countryName}', country.name.common)
    .replace('{population}', country.population.toLocaleString())
    .replace('{capital}', country.capital[0])

  return {
    title: title,
    description: constants.detailsPage.meta.description,
  }
}
