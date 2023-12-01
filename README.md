# assignment-icebreaker
simple library checkin API on node.js with minimal requirements

requirements:
- all imcluded within *package.json*

## Information:

- The database resides on a public postgres-service: NeonDB, the seed/migration files and SQL dumps are provided with the _database_ folder as well. Because of a remote server, the bootup takes a bit time, please follow the console messages.
- Permissions will be provided with a zip-file send to the email.
- As usual, yarn install && yarn run start boots up the database.

## Differing elements:

- ORM was not needed specifically and because of time constrain it isn't set up. But as the provided models show,
it would be not much effort to implement it. I did not prefer it before having it planned.
- As the database dump (and the models) shows, the Content modularity can easily be expanded trough subclasses. I was planning to create a modular CMS-like structure with this. The ID's within CrossBindings and nested contents have been explicitly hand-crafted, thus it will help to build (data scaffolding is important for a neat plan).
- Express for the restAPI with various security policies & middlewares is also available within the framework, enabling fast kickstart for a JWT-based auth structure. The auth middlewares have been cut-off atm.
- GraphQL has been planned and partly implemented on a different fork.
- Using PostgreSQL through Sequelize. I also used uuid and JSON fields within postgres (which need to be installed onto the postgres server).
- added various package.json commands to document & build & test, but links need to be updated for this release.

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

- Typescript has been used (partly) with interfaces for different content types. Typescript will be more embbeded later on. 
- Content types are inherited from the base content class. 
- *Contents can be nested*, whereas each have a parent id to be referred.
- Comments are just another content-type, implementing the content class, thus retrieval of comments should be done recursively within the same table (which should be easier on postgresql).
- Imported content (such as different elements, tags) should always be saved into the JSON-field of the content-table, which is of type JSON.

## Security concerns:

- Various middlewares are added and configurable troughout the JSON files located within config/ folder.
- Content Security Policies are also located in the same folder.
- The Rest API implements JWT tokens of 1-hour lifetime, but *auth functionality has been truncated atm*.

## Test-driven:
- Test-cases for various parts are planned, but won't be heavily enforced as in TDD. 

## setup steps:

* copy the files within the zipfile into their respective folders, edit *config/[app-dev.json | app-prod.json]* if needed
* npm i / yarn install
* edit *config/policies.json*, if it needs to be used
* npm / yarn run start

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

