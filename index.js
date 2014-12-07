/*!
 * iso-week <https://github.com/jonschlinkert/iso-week>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function isoWeekOfYear(date) {
  date = date instanceof Date ? date : new Date();
  var res = new Date(date.valueOf());
  var day = (date.getDay() + 6) % 7;
  res.setDate(res.getDate() - day + 3);
  var first = new Date(res.getFullYear(), 0, 4);
  var days = (res - first) / 86400000;
  return 1 + Math.ceil(days / 7);
};