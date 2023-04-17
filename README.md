# prisma.io API

## Intro

<!-- This is just an api built with [prisma.io](https://www.prisma.io/), a MYSQL database, and express. -->

This is is an API (with CRUD Operations) that manage the users data of a real estate agency.

#

## Technos

Built with:

- [![Node][node.js]][node-url]

        Role: Help us running javascript code on an OS

- [![Express][express.js]][express-url]

        Role: Help us create server with endpoints, routes, controllers...

- [![MySQL][mysql]][mysql-url]

        Role: The database used by the API

- [![Prisma][prisma]][prisma-url]

        Role: Help us create models with relations, connect to the database, make complex queries requests to the database.

<br>

## Guide

If you haven't already, install mysql v8.0.29, node v16.13.2 and npm v8.1.2 or later versions, and then follow the coming steps:

<br>

1. After cloned the repository on your local machine, run this command:

```sh
    npm install --save
```

or if you're using yarn

```sh
    yarn add
```

This command will automatically install these npm packages:

```json
{
  "@prisma/client": "^4.12.0",
  "express": "^4.18.2",
  "mysql2": "^3.2.3",
  "nodemon": "^2.0.22",
  "prisma": "^4.12.0"
}
```

<br>

2.  Create a file named `.env` and paste inside the database connection query like this:

```.env
    DATABASE_URL=mysql://{username}:{password}@localhost:3306/{db_name}
```

- **`username`** : your username used to connect to your MySQL database
- **`password`** : your password used to connect to your MySQL database
- **`db_name`** : your MySQL database name `(you must create it manually)`

<br>
<br>

3. Now open the terminal at the root of the project and run these commands:

```sh
    npx prisma generate
```

or if you're using yarn :

```sh
    yarn prisma generate
```

This is just to create or genrate prisma client init.
And after run these:

```sh
    npx prisma migrate dev --name init --create-only
```

or if you're using yarn :

```sh
    yarn prisma migrate dev --name init --create-only
```

This command connect to the database and keep tracking a lot of features related to prisma, then we can use everything prisma provided for us.

If done you will see a table in your current database named `__prisma_migrations`. Now we can migrate our models into the database and create our tables basing on our models. To do it runn this command:

```sh
    npx prisma migrate deploy
```

or if you're using yarn :

```sh
    yarn prisma migrate deploy
```

### Now we created our api, let's use it.

<br>
<br>

# User Guide

- To create an user:

  \_ EndPoint: _`POST http://localhost:5000/`_

  \_ body:

  ```json
  {
    "firstname": "Angela",
    "lastname": "Feirera",
    "age": 22
  }
  ```

- To update an user:

  \_ EndPoint: _`PUT http://localhost:5000/:id`_

  \_ body:

  ```json
  {
    "age": 35
  }
  ```

- To DELETE an user:

  \_ EndPoint: _`DELETE http://localhost:5000/:id`_

  \_ body:

        NO QUERY!

- To get all users:

  \_ EndPoint: _`GET http://localhost:5000/`_

  \_ body:

        NO QUERY!

- To create one house:

  \_ EndPoint: _`POST http://localhost:5000/houses`_

  \_ body:

  ```json
  {
    "address": "6543 Main Street, V4BA",
    "wifiPassword": "password",
    "ownerId": "6418a4b3-8e3f-4f0d-b2c8-1a0dcaa14ed6",
    "builtById": "a607501a-3baa-47ca-8e63-7a61581b390b"
  }
  ```

- To create multiple houses:

  \_ EndPoint: _`POST http://localhost:5000/houses/many`_

  \_ body:

  ```json
  [
    {
      "address": "6543 Main Street, V4BA",
      "wifiPassword": "password",
      "ownerId": "6418a4b3-8e3f-4f0d-b2c8-1a0dcaa14ed6",
      "builtById": "a607501a-3baa-47ca-8e63-7a61581b390b"
    },
    {
      "address": "654 Main Street, V4H3BA",
      "ownerId": "6418a4b3-8e3f-4f0d-b2c8-1a0dcaa14ed6",
      "builtById": "a607501a-3baa-47ca-8e63-7a61581b390b"
    },
    {
      "address": "6543 Main Street, VBA",
      "wifiPassword": "password",
      "ownerId": "6418a4b3-8e3f-4f0d-b2c8-1a0dcaa14ed6",
      "builtById": "a607501a-3baa-47ca-8e63-7a61581b390b"
    },
    {
      "address": "8937 Linked Street2, V4H3BA",
      "wifiPassword": "password",
      "ownerId": "6418a4b3-8e3f-4f0d-b2c8-1a0dcaa14ed6",
      "builtById": "a607501a-3baa-47ca-8e63-7a61581b390b"
    }
  ]
  ```

- To get one house by address:

  \_ EndPoint: _`GET http://localhost:5000/house`_

  \_ body:

  ```json
  {
    "address": "6543 Random Street, V4H3BA"
  }
  ```

- To get all houses :

  \_ EndPoint: _`GET http://localhost:5000/houses`_

  \_ body:

        NO QUERY!

<br>
<br>

### Now we're done! You can customize this as you want from now!

<br>

#   CONTACT

<br>

*` ADZOHONOU K. Apelete`*  - - -  *`adzohonouapelete@gmail.com`*

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[express.js]: https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=express&logoColor=61DAFB
[express-url]: https://expressjs.com
[node.js]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=nodedotjs&logoColor=4FC08D
[node-url]: https://nodejs.org/en/
[mysql]: https://img.shields.io/badge/MySQL-111?style=for-the-badge&logo=mysql&logoColor=white
[mysql-url]: https://www.mysql.com
[prisma-url]: https://www.prisma.io/
[prisma]: https://img.shields.io/badge/Prisma-gray?style=for-the-badge&logo=Prisma&logoColor=61DAFB
