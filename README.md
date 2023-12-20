<h1 align="center">
  Hackernews GraphQL Back-End
</h1>

<p align="center">
This is a HackerNews prototype based on Apollo GraphQL Server + Prisma as ORM. 
</p>


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

Warning: **For windows users use bash instead of powershell or cmd**

- Clone this project
  
  ```cmd
    git clone https://github.com/codeLearnerrr/hackernews-graphql-back-end.git
  ```
 1. Select the db address in [.env.example](./.env.example)
  
 2. Run postgres on docker
    ```cmd
      docker compose up postgresdb -d
    ```
 3. Setup project by running
    
    ```cmd
    yarn setup
    ```

## Docker 
- To run all docker compose services
  ```cmd
  docker compse up -d
  ```

- To delete this project fully from the computer execute 
  ```cmd
  docker compose down --volumes --rmi all
  ```

## Project Notes

- To view data in production from prisma access the [cloud dashboard](https://cloud.prisma.io/)
- After every local change in `prisma.schema` is necessary to run a migration  
```cmd
npx prisma migrate dev --name "init"
``` 
- Available prisma Studio for local database administration by running 
```cmd
npx prisma studio
``` 
on CLI

## Contributing 

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch `(git checkout -b feature/amazing-feature)`
3. Commit your Changes `(git commit -m 'feat(amazing-feature): my feature is awesome')`
4. Push to the Branch `(git push origin feature/amazing-feature)`
5. Open a Pull Request

## Acknowledgments

-  Automatic schema generation and typescript types from "code first" approach provided by [Nexus GraphQL](https://www.npmjs.com/package/nexus) 
-  [Prisma](https://www.npmjs.com/package/prisma) as type-safe ORM 
-  Pre-configured GraphQL server from [Apollo Server](https://www.npmjs.com/package/apollo-server)
-  Typescript support from [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)