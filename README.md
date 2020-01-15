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
| server.js  | Starts the api server and listens to specified port                         |
| src folder | Contains all of your app files                                              |
| src/app.js | Initial file which starts the app, routes versions, sends 404 and 500 error |
| src/api    | API versions are seperated into folders and placed inside this folder       |
| src/util   | Contains functions which might be used globally in the app                  |

# How to start

```
npm start
```

Calls the server.js file to start the application.
