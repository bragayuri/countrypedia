type Country = {
  cca3: string
  name: {
    common: string
    official: string
    nativeName: {
      spa: {
        official: string
        common: string
      }
    }
  }
  flag: string
  flags: {
    png: string
    svg: string
    alt: string
  }
  population: number
  capital: string[]
  unMember: boolean
}
