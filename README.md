# prefixed-require

Require modules from a prefixed path.

## Install

    $ npm install prefixed-require

## Usage

```javascript
var handler = require('prefixed-require')('./handlers');

var helloHandler = handler('hello');
```

## Tests

    $ npm install
    $ npm test

[![Build Status](https://secure.travis-ci.org/jaredhanson/node-prefixed-require.png)](http://travis-ci.org/jaredhanson/node-prefixed-require)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
