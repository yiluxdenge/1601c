"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPage = undefined;

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPage = function getPage(cb, index, num) {
    console.log('2222');
    _config2.default.query("select * from pagination", function (err, result) {
        console.log(result);
        cb(result);
    });
};
exports.getPage = getPage;