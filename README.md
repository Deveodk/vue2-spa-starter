# vue2_project_template
> A clean vue2 template with the Deveo structure and pre-implemented structure, useful packages and methods. This repo should be used as a template when creating new Deveo projects.

IMPORTANT! Always remember to run
``` bash
npm run build
```
before pushing to a production environment.

## Structure
* Webpack compiler with hot reload
* Sass-loader (Bootstrap and Font Awesome pre-installed)
* ESLint code linting
* Unit testing with Karma + Mocha & Nightwatch
* API requests as services with VueAxios
* Global eventHub

## Included packages:
* vue-router
* vuex
* vue-axios
* vue-moment
* node-sass
* sass-loader

## Included methods:
* Check if user is online, otherwise throw offline template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
