# Welcome to ciao-status-fetch 👋
[![Version](https://img.shields.io/npm/v/ciao-status-fetch.svg)](https://www.npmjs.com/package/ciao-status-fetch)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: bravo68web](https://img.shields.io/twitter/follow/bravo68web.svg?style=social)](https://twitter.com/bravo68web)

> A SDK to fetch data from Ciao instance

## Install

```sh
npm i ciao-status-fetch
```

## Usage

```js
const ciaoInstance = require('./index.js')
const checker = new ciaoInstance("<ciao-instance-url>")

const status =  async () => {
    await checker.check(<id>);
  };

```

## Run tests

```sh
yarn run test
```

## Author

👤 **BRAVO68WEB**

* Website: https://bravo68web.me
* Twitter: [@bravo68web](https://twitter.com/bravo68web)
* Github: [@BRAVO68WEB](https://github.com/BRAVO68WEB)
* LinkedIn: [@bravo68web](https://linkedin.com/in/bravo68web)

## Show your support

Give a ⭐️ if this project helped you!