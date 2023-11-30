# assignment-librian
Simple content API on node.js with minimal requirements. 

To-Do's:
- testing suite
- GraphQL
- tRPC
- Dashboard
- maybe a second client with React
- mobile client
- Web3 connectivity

* please refer to [docs/](https://github.com/cgencer/challenges_librarian) for the detailed docs.
* kanban board for the issues at hand is available at [kanban board](https://cgencer.github.io/challenges_librarian/kanban.html)

[POSTMAN Collection Invitation](https://app.getpostman.com/join-team?invite_code=7fb999cabcec15df2ab29b671cb8322f)

[POSTMAN API-Collection Report](docs/api-report.html)

requirements:
- basic dependencies will be covered within *package.json*
- database specific requirements are given below.

## Information:

I've created this as a bootstrap for my personal and professional projects with the 
with the possibility of switching the datalayer to be used as RestAPI, GraphQL or tRPC
in mind. It is a opinionated package, please bear that in mind. 
For the frontend the folder *client/* folder will be used.
I use *ngrok* for tunneling into my database vagrant box, so the database server is seperated.

## Compontents:

- Node.js with TypeScript
- Express for the restAPI with various security policies & middlewares
- GraphQL & tRPC
- PostgreSQL
- various package.json commands to document & build & test

## Database

The database commands of the package.json also help migrations and seedings
of the database, whereas I will also create dummy seedable content for various usage examples.
Be advised to create a user/ password trough the *psql* command and a clean db-table.

Requirements:
- `yum install postgresql11 postgresql11-contrib`
- `uuid-ossp` for postgres

and within psql:
- `CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';`


## Content details:
- Typescript will be used on with Interface models for each content type. 
- Content types will be inherited from the base content class. 
- Comments are just another content-type, implementing the content class, thus retrieval of comments should be done recursively within the same table (which should be easier on postgresql).
- Imported content will always be saved within the JSON-field of the content-table, which uses the JSON field-type.

## Security concerns:
- Various middlewares are added and configurable troughout the JSON files located within config/ folder.
- Content Security Policies are also located in the same folder.
- The Rest API implements JWT tokens of 1-hour lifetime.

## Test-driven:
- Test-cases for various parts are planned, but won't be heavily enforced as in TDD. 

## setup steps:
* create an empty database
* edit *config/[app-dev.json | app-prod.json]* to reflect your setup
* if needed, you can edit *config/policies.json* as well
* to create the required folders and files please run 
`npx sequelize-cli init --force`
* to create dummy data for users & contents tables please run
`npm run db:seeds`

### these needs to be edited to use migration & seeding & model-creation
* edit *.sequelizerc*, reflecting the database connection info
* edit *.sequelizeautoconfig.json*, reflecting the database connection info

# various *npm run* setup commands

## npm run db:build

Builds database models from scratch. Please do this to reflect changes on the database structure.

## npx sequelize-cli init

Initializes Sequelize-CLI for migrations & seeding the database on commands

### npm run db:create

Creates the database tables

### npm run db:seeds

Creates mock-data on speific tables with working reference-ids:
- a list of 100 users.
- contents for each type: article, game, product
- comments for all of these types including comments for comments

### npm run db:g:migration

### npm run db:g:seed

### npm run db:seeds

### npm run db:g:models

