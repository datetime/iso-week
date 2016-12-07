/**
 * iso-week <https://github.com/jonschlinkert/iso-week>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

require('mocha');
var assert = require('assert');
var moment = require('moment');
var isoWeek = require('./');

describe('isoWeek()', function () {
  it('should return the current isoWeek', function () {
    assert.equal(isoWeek(), moment().week());
    assert.equal(isoWeek(new Date()), moment().week());
  });
});
