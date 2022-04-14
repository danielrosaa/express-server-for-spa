# Express Server for static files

Hey! This is a simple server for SPA builds.

## Setting up
```
yarn build:all
```
Builds the 2 frontend projects in **app/views/**

## Run the server
```
yarn start
```
Runs the server. Access http://localhost:5555/

## Frontend projetcs
There are two projects in **app/views/**. One with Vue, another with Nuxt.
After building them, server.js will use the **dist/** folder in each one to serve the static files. Once the project is running, you can access them at http://localhost:5555/nuxt/ and http://localhost:5555/vue/.
