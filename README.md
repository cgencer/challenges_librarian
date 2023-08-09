# assignment-icebreaker
simple blog API on node.js with minimal requirements

* please refer to [docs/](https://cgencer.github.io/assignment-icebreaker/) for the detailed docs.
* kanban board for the issues at hand is available at [kanban board](https://cgencer.github.io/assignment-icebreaker/kanban.html)

[POSTMAN Collection Invitation](https://app.getpostman.com/join-team?invite_code=7fb999cabcec15df2ab29b671cb8322f)

[POSTMAN API-Collection Report](docs/api-report.html)

requires 
postgresql11-contrib

and within psql:
CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';


# setup steps

* create an empty database
* copy prod.env or dev.env file into .env file and change its contents
* run **npx sequelize-cli init --force** to create the required folders and files
* edit .sequelizerc file to reflect database connection info
* edit .sequelizeautoconfig.json file to reflect database connection info

# various setup commands

## npm run db:build

Builds database models from scratch. Please do this to reflect changes on the database structure.

## npx sequelize-cli init

Initializes Sequelize-CLI for migrations & seeding the database on commands

### npm run db:create

Creates the database tables

### npm run db:migrate

### npm run db:g:migration

### npm run db:g:seed

### npm run db:seeds

### npm run db:g:models

