# vue2_project_template
> A clean vue2 template with the Deveo structure and pre-implemented useful packages and methods. This repo should be used as a template when creating new Deveo projects.

### Structure:
* Webpack compiler with hot reload
* Sass-loader (Bootstrap and Font Awesome pre-installed)
* ESLint code linting
* Unit testing with Karma + Mocha
* End-to-end testing with Nightwatch
* API requests as services with VueAxios
* Global eventHub

### Included packages:
* vue-router
* vuex
* vue-axios
* vue-moment
* node-sass
* sass-loader

### Included methods:
* Check if user is online, otherwise throw offline template
* In case of bad URL request, throw 404 template

### Build Setup

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

### License
[MIT](http://opensource.org/licenses/MIT)

[![alt text](https://s3-eu-west-1.amazonaws.com/rk-solutions/github_footer.png)](https://deveo.dk)