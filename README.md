## Hackernews GraphQL Back-End
 This boilerplate containts an Apollo GraphQL Server + Prisma as SQL database. 

## Project Notes
- Nexus is the schema generator for graphql and prisma

## Prerequisites

- [x] Have an Apollo account for Apollo Studio [here](https://studio.apollographql.com/)
- [x] Have an Prisma account for Prisma Studio [here](https://www.prisma.io/studio)
- [x] Create local dev.db instead of env('DATABASE_URL') in schema.prisma file > datasource db > url 
- [x] Run the prisma database script before using it `npx prisma migrate dev --name "init"`

## Features

- [x] Automatic schema generation and typescript types from "code first" approach provided by [Nexus GraphQL](https://www.npmjs.com/package/nexus) 
- [x] [Prisma](https://www.npmjs.com/package/prisma) as type-safe ORM 
- [x] Pre-configured GraphQL server from [Apollo Server](https://www.npmjs.com/package/apollo-server)
- [x] Typescript support from [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

## Installing

- Clone this project