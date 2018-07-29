"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDeAesUtf = exports.getAesHex = undefined;

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAesHex = function getAesHex(data, key) {
    var cipher = _crypto2.default.createCipher("aes192", key);
    var aesHex = cipher.update(data, 'utf-8', 'hex');
    aesHex += cipher.final('hex');
    return aesHex;
};
var getDeAesUtf = function getDeAesUtf(aes, key) {
    var cipher = _crypto2.default.createDecipher("aes192", key);
    var deAes = cipher.update(aes, 'hex', 'utf-8');
    deAes += cipher.final('utf-8');
    return deAes;
};
exports.getAesHex = getAesHex;
exports.getDeAesUtf = getDeAesUtf;