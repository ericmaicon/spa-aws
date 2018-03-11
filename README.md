# Simple React Amazon Review Page SPA

[![Build Status](https://travis-ci.org/ericmaicon/spa-aws.svg?branch=master)](https://travis-ci.org/ericmaicon/spa-aws)
[![Coverage Status](https://coveralls.io/repos/github/ericmaicon/spa-aws/badge.svg?branch=master)](https://coveralls.io/github/ericmaicon/spa-aws?branch=master)

This is a simple SPA with React. It uses:

* React
* Redux
* Redux Form
* Redux Saga
* Ant Design
* Parcel

## Instalation

It will install every dependency

~~~sh
yarn install
~~~

## Server

This command was made to avoid CORS problem with the server. It creates a simple express server at port 3333

~~~sh
yarn server
~~~

## Start the dev environment

This command calls parcel and let it build the page on the address:port mentioned bellow

~~~sh
yarn start
~~~

After that, you may access using the following url: [http://localhost:8080](http://localhost:8080)

## Test:

~~~sh
yarn test
~~~

## Lint:

~~~sh
yarn eslint
~~~
