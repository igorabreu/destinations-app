## Destinations Application

Restful web API and web application for Destinations project.

Built with React, Express.js, MogoDB and Node.js

#### Run local development

- Install [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
- Create an `.env` file at `/server` containing your MongoDB database url
  ```
    MONGO_URL=your_mongoDB_URL
  ```
- The MongoDB database should have two colletions: `users` and `destinations`
- Run:
  ```
    $ yarn install-dependencies
    $ yarn install-dependencies
    $ yarn start
  ```
