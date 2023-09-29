## Hackernews GraphQL Back-End
 This is a HackerNews prototype based on Apollo GraphQL Server + Prisma as SQL database. 

![hackernews-graphql-back-end](https://github.com/codeLearnerrr/hackernews-graphql-back-end/assets/44307139/5b2fc548-0963-4e7b-8b79-b65fac7bf0ed)


## Prerequisites

- Node above version 18+

  ```cmd
    https://nodejs.org/en/download
  ```
- Most recent stable version of Docker 

  ```cmd
    https://docs.docker.com/desktop/install/windows-install/
  ```
## Features

- [x] User operations: create account and login
- [x] Post as link
- [x] Vote/unvote links
- [x] Query several links at a time or one
- [x] Filter, sort and paginate links

## Installing

- Clone this project
  
  ```cmd
    git clone https://github.com/codeLearnerrr/hackernews-graphql-back-end.git
  ```
 1. Install packages
    
    ```cmd
    yarn install
    ```
 3. Setup local .env
    
    ```cmd
    yarn env:local
    ```
 4. Run docker
    
    ```cmd
    yarn dockerDb
    ```
 5. Run the project
    
    ```cmd
    yarn dev
    ```

## Publishing

- [x] Before publishing to heroku make sure you added the github secrets used in `deployment.yml`
- [x] To publish online is necessary to provision a [heroku-postgres](https://elements.heroku.com/addons/heroku-postgresql) add-on instance

## Project Notes

- The postgreSQL database is runned in docker
- To view data in production from prisma access the [cloud dashboard](https://cloud.prisma.io/)
- After every local change in `prisma.schema` is necessary to run a migration  `npx prisma migrate dev --name "init"`
- Available prisma Studio for local database administration by running `npx prisma studio` on CLI

## Contributing 

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/amazing-feature)
3. Commit your Changes (git commit -m 'feat(amazing-feature): my feature is awesome')
4. Push to the Branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## Acknowledgments

-  Automatic schema generation and typescript types from "code first" approach provided by [Nexus GraphQL](https://www.npmjs.com/package/nexus) 
-  [Prisma](https://www.npmjs.com/package/prisma) as type-safe ORM 
-  Pre-configured GraphQL server from [Apollo Server](https://www.npmjs.com/package/apollo-server)
-  Typescript support from [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
