# Pub Sub app setup


### Versions
* Node - 10.19.0
* NPM - 6.14.11

## Prerequisites
* You should have Postgresql installed

## Setting up the project
* Clone this repository
* Create a `.env` file in the root of the project and add the following
  key-value pairs - `DB_USER` and `DB_PASS` which should be the credentials
  for your database.
* Run `npm install` to install all dependencies
* Run `npx sequelize-cli db:create`/ `sequelize db:create` to create the development database
* Run `NODE_ENV=test npx sequelize-cli db:create`/ `NODE_ENV=test sequelize db:create` to create the test database
* Run `npx sequelize-cli db:migrate`/ `sequelize db:migrate` to run migrations
* To start the server app, run `npm run dev` 
* To start the subscriber app, run `npm run dev:subscriber`
    

## Scripts
* `npm run dev` - to start the publishing server
* `npm run dev:subscriber` - to start the subscriber server
* `npm run test` - to test app

## Directory structure

* `server/config` - contains Sequelize configuration
* `server/controllers` - controllers related code. Helps move a lot of logic away from
  routes
* `server/migrations` - sequelize migrations are stored here
* `server/models` - model definitions are stored here
* `server/routes` - for defining routes
* `server/tests` - for integration tests
* `server/app.js` - general application settings for publishing server
* `package.json` - details of installed packages and scripts
* `subscriber/` - subscriber directory 
* `subscriber/controllers` - controllers related code for subscribing server. Helps move a lot of logic away from routes
* `subscriber/routes` - for defining subscriber routes
* `subscriber/app.js` - general application settings for subscribing server

## Additional notes
* Added a `start.sh` script but couldn't adequately test it due to time constraints.
* To run, use `bash start.sh`
    