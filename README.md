# Simple Express Boiler Plate

This is a simple boiler plate for developing API using Express JS.
Since Express doesn't restrict you to a specific directory structure you have the freedom to develop apis in any directory structure you desire.
I developed this boiler plate to set myself a directory structure to follow in my projects.

## What's included ?

- Directory structure for versioning api
- Logging using Morgan

## About folders and files

| Name       | Function                                                                    |
| ---------- | --------------------------------------------------------------------------- |
| server.js  | Starts the api server and listens to specified port. Any code you want to run before starting the server can be included in this file                         |
| src folder | Contains all of your app files                                              |
| src/app.js | Initial file which starts the app, routes versions, sends 404 and 500 error |
| src/api    | API versions are seperated into folders and placed inside this folder       |
| src/util   | Contains functions which might be used globally in the app                  |
| config.js | The configration is loaded based on NODE_ENV. default is development

# How to start

```
npm start
```
Calls the server.js file to start the application.

## MongoDB Configuration

- Create a .env file
- Create a env resource named `DB_CONNECTION_STRING = connectionstring`
- This boiler plate uses Mongoose to connect with MongoDB
- The db connection function is inside `src/util/dbConnect.js`