SEQUELIZE BASICS

The CLI
Installing CLI
Let's start with installing CLI, you can find instructions here. Most preferred way is installing locally like this

$ npm install --save sequelize-cli
Bootstrapping
To create an empty project you will need to execute init command

$ node_modules/.bin/sequelize init
This will create following folders

config, contains config file, which tells CLI how to connect with database
models, contains all models for your project
migrations, contains all migration files
seeders, contains all seed files
Configuration
Before continuing further we will need to tell CLI how to connect to database. To do that let's open default config file config/config.json. It looks something like this

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

Creating first Model (and Migration)

$ node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

or can be short with bashprofile: s model:generate ...etc

Running Migrations

$ node_modules/.bin/sequelize db:migrate

same thing here can be aliased


undo one:
$ s db:migrate:undo


undo all
$ s db:migrate:undo:all --to X


create seed file
$ s seed:generate --name demo-user

edit file:

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

Running Seeds
commit to db:

$ s db:seed:all

Undoing Seeds

undo one most recent: 
s db:seed:undo

undo all:
node_modules/.bin/sequelize db:seed:undo:all

