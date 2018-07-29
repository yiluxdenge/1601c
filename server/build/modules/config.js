"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = _mysql2.default.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "114614",
    database: '1601',
    insecureAuth: true
});
connection.connect();
exports.default = connection;