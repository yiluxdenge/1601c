"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeCart = exports.addCart = exports.getAllCart = undefined;

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllCart = function getAllCart(cb) {
    _config2.default.query('select * from shopcart', function (err, result) {
        cb(result);
    });
};
var addCart = function addCart(pid, cb) {
    _config2.default.query("insert into shopcart(id, name, price, msg, num) values (" + pid + ",\u5546\u54C1,100,\u539F\u4EF7100\u9650\u4EF7100,1)", function (err, result) {
        if (err) throw Error("出错");
        cb(1);
    });
};
var removeCart = function removeCart(pid, cb) {};
exports.getAllCart = getAllCart;
exports.addCart = addCart;
exports.removeCart = removeCart;