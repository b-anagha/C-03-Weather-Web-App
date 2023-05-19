var $ = require('../internals/export');
var difference = require('../internals/set-difference');
var setMethodAcceptSetLike = require('../internals/set-method-accept-set-like');

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('difference') }, {
  difference: difference
});
