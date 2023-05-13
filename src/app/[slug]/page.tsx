import React from 'react'
import Container from '@/app/components/Container/Container'
import Card, { CardData } from '../components/Card/Card'
import Grid from '../components/Grid/Grid'
import styles from './page.module.scss'
import Link from 'next/link'
import CountryDetailsTable from '../components/CountryDetailsTable/CountryDetailsTable'
import { getCountryBySlug } from '../api/getCountryBySlug'
import { Country } from '@/types/Country'
import { getCountryBorders } from '../api/getCountryBorders'
import { Metadata } from 'next'
import Image from 'next/image'
import Icon from '../components/Icon/Icon'
import arrowLeftIcon from 'src/assets/svg/arrowLeftIcon.svg'

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
  const data: CardData = {
    heading: country.name.common,
    subHeading: country.name.official,
    paragraph: `Population: ${country.population.toLocaleString()}`,
  }

  const card = {
    id: country.cca3,
    href: '#',
    target: '',
    imageUrl: country.flags.svg,
    data,
  }

  return (
    <Container>
      <div className={styles.layout}>
        <h1 className={styles.pageHeading}>Country Details Page</h1>
        <Link className={styles.goBackLink} href="/">
          <div className={styles.goBack}>
            <Icon
              height={30}
              width={30}
              id="go-back-icon"
              svg={arrowLeftIcon}
              alt="Go back icon"
            />
            <span>Go back</span>
          </div>
        </Link>
        <div className={styles.countryDetails}>
          <div className={styles.countryInfoPanel}>
            <Image
              className={styles.flag}
              src={card.imageUrl}
              width={286}
              height={143}
              alt={`${country.name.common}-flag`}
            />
            <h5 className={styles.countryHeading}>{data.heading}</h5>
            <h6 className={styles.countrySubHeading}>{data.subHeading}</h6>
            <CountryDetailsTable country={country} />
          </div>
        </div>
        <h2 className={styles.borderCountriesHeading}>Bordering countries</h2>
        <div className={styles.borderCountries}>
          <div className={styles.borderCountriesPanel}>
            <Grid>
              {borderCountries.map((borderCountry: Country) => {
                const { cca3: id } = borderCountry
                const borderData: CardData = {
                  heading: borderCountry.name.common,
                  subHeading: borderCountry.name.official,
                  paragraph: `Population: ${borderCountry.population.toLocaleString()}`,
                }
                return (
                  <Link key={id} id={id} href={`/${id}`}>
                    <Card
                      imageUrl={borderCountry.flags.svg}
                      data={borderData}
                      alt={`${borderCountry.name?.common}-flag`}
                    />
                  </Link>
                )
              })}
            </Grid>
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

  return {
    title: `Visit ${country.name.common} one day!`,
  }
}
