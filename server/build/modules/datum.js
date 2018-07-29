"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDatum = undefined;

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDatum = function getDatum(cb) {
    _config2.default.query('select * from shopcart', function (err, result) {
        cb(result);
    });
};
exports.getDatum = getDatum;