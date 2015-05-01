/**
 * iso-week <https://github.com/jonschlinkert/iso-week>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

/* deps: mocha */
require('should');
var moment = require('moment');
var isoWeek = require('./');

describe('isoWeek()', function () {
  it('should return the current isoWeek', function () {
    isoWeek().should.equal(moment().week());
    isoWeek(new Date()).should.equal(moment().week());
  });
});