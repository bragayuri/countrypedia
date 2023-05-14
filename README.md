# Countrypedia

Countrypedia is a web application that provides information about countries around the world. It utilizes the REST COUNTRIES API available at https://restcountries.com/ to fetch data about countries, such as names, population, languages, currencies, and much more.

# Countrypedia utilizes the following technologies:

- Next.js: A React framework for server-side rendered and static websites.
- React: A JavaScript library for building user interfaces.
- Styled Components: A CSS-in-JS library for styling React components.
- TypeScript: A typed superset of JavaScript for improved development experience.
- ESLint: A linter tool for code quality and error detection.
- Prettier: An opinionated code formatter for consistent code style.
- Cypress: A JavaScript-based end-to-end testing framework for validating application functionality from a user's perspective.

## Features

- Search for countries by name
- Browse countries by region
- View detailed information about a specific country, including:
  - Official and common country names
  - Capital city
  - Population
  - Area
  - Languages spoken
  - Currencies used
  - Flag
  - Bordering countries
  - And many more!

## Getting Started

To get started with Countrypedia, follow these steps:

1. Clone the repository to your local machine:

- git clone https://github.com/bragayuri/countrypedia.git

2. Change into the `countrypedia` directory:
   -cd countrypedia

3. Install the necessary dependencies by running:

- npm install

4. Start the development server:

- npm run dev

5. Open your browser and navigate to http://localhost:3000 to view the app.

# Requirement considerations

For JS bundle size optimization the app uses NextJs techniques such:

- Server and Client Components, by defining which components should be rendered on Client or Server side by using the 'use client' directive;
- Usage of NextJS Link components that utilizes 'prefetch';
- Dynamic importing using NextJS 'next/dynamic';
- Server side fetching to all calls

- To implement dynamic SEO generateMetadata was used to provide personalized tags on Country Details Page.

# More to come!

- Storybook implementation allowing a complete design system
- Implementation of Atomic Design principles
- Color themes
- Integration with https://leafletjs.com/ maps api to plot the countries.

## License

Countrypedia is released under the [MIT License](https://opensource.org/licenses/MIT).

Developed by Yuri Braga as a code challenge for Distilled Ireland https://www.distilled.ie/
