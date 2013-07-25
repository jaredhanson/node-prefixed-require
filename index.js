var path = require('path');

module.exports = function(prefix) {
  prefix = path.resolve(prefix);
  
  return function(id) {
    return require(path.join(prefix, id));
  }
}
