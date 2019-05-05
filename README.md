# Name generator

Small app that generates random strings :sweat_smile:. Basically this app was done to test following tehnologies_

- [Gatsby.js](https://www.gatsbyjs.org/)
- [Serverless](https://serverless.com/)
- [Circleci](https://circleci.com/)
- AWS S3 and Lambda

## Requirements

- node >= 11.6
- npm >= 6.8
- aws account


## Develop lambdas


- Install dependencies `cd lambda-functions && npm install`
- Run locally `npm run api:develop`

## Develop gatsby app

- Install dependencies `npm install`
- Run locally `npm run develop`


## Build and Run locally

- `npm run build`
- `npm run serve`

## Eslint
- For gatsby `npm run lint`
- For Lambda `npm run api:lint`
- For both `npm run lint:all`

## Styling

- For React component styling [Styled components](https://www.styled-components.com/)
- Spinner css from [Loading.io](https://loading.io/animation/)
- Color palette randomized with [coolors.co](https://coolors.co/717c89-8aa2a9-90baad-a1e5ab-adf6b1)
- Icons from [Noun Project](https://thenounproject.com/)

## Gatsby template

- [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)
