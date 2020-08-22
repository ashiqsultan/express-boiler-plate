# Simple Express Boiler Plate with MongoDB

This is a simple boiler plate for developing APIs using Express JS.

Since Express doesn't restrict you to a specific directory structure you have the freedom to follow any directory structure you desire.

I developed this boiler plate to set myself a directory structure to follow in my projects.

## How to start

Start the app for development using the coommand

```
npm run devstart
```

## What's included ?

- Directory structure for versioning api
- Separation of Express code and business logic
- Logging using Morgan
- Mongoose connect configuration

## About Files and Folders

| Name                       | Function                                                                                           |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| src                        | Project folder                                                                                     |
| app.js                     | Starts server, loads express middlewares and other initial functions needed at the start of server |
| models                     | Contains MongoDB Mongoose Schema                                                                   |
| services                   | Contains business logic                                                                            |
| api/v1                     | Contains api versioning folders                                                                    |
| api/v1/resource/routes.js  | Routes path to controllers                                                                         |
| api/v1/resource/controller | Route logic for the resources. Calls the required service function                                 |

## Env and Config

- All app configurations are stored in config.js
- The config.js values should be loaded from **process.env** variables
- You can also store configs directly in the config.js
- You can store some configs directly in the file and some as env variables

### Development and Production configs

- There are two configs one for development and one for production
- This is done in case we need to have different config values for different environments
- They are loaded based on the `process.env.NODE_ENV` value. Default is development
- You can also add staging environment and edit the `if...else` statement at the end of the config.js file

### Environment Variables in development

- To load env variables in development we have used **dotenv** npm package
- The following environment variables and configs are necessary - `NODE_ENV` - `PORT` - `DB_CONNECTION_STRING`

## MongoDB Configuration

- Create a .env file
- Create a env resource named `DB_CONNECTION_STRING = connectionstring`
- This boiler plate uses Mongoose to connect with MongoDB
- The db connection function is inside `src/util/dbConnect.js`

## Sevices

- Services should be pure functions
- These function can be used in unit tests
- Business Logic should be inside service layer
- Interaction with Database using ORM is done in Services layer
- Move your business logic away from the express.js router
- Don’t pass the req or res object to the service layer
- Don’t return anything related to the HTTP transport layer like a status code or headers from the service layer
- Always use try catch
- Throw the errors from catch

## Controllers

- The controllers are inside api routes
- The controllers contain route logic.
- They do functions such as - Sanitizing the request body data - Extracting query params
- They call the middlewares if there are any.
- They call the respective service functions with the required parameters
- Always use Try...Catch
- Call next(error) inside catch
