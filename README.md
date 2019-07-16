## Destinations Application

Restful web API and web application for Destinations project.

Built with React, Express.js, MogoDB and Node.js

#### Run development

- Install [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
- Create an `.env` file at `/server` if running locally or setup `.env` if running on server with following data:
  ```
    MONGO_URL=your_mongoDB_URL
  ```
- MongoDB database should have two colletions: `users` and `destinations`
- Run:
  ```
    $ yarn install-dependencies
    $ yarn install-dependencies
    $ yarn start
  ```
- Create an initial user with an `POST` request to the API endpoint `/api/user` as the JSON model below:
  ```
    {
      "name": "John Doe",
      "email": "john.doe@gmail.com",
      "password": "myPassword"
    }
  ```
