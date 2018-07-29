'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _users = require('../modules/users');

var _crypto = require('../utils/crypto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/api/getAccountList', function (req, res) {
    var token = req.headers.token;

    console.log("9999999");
    console.log(req.url);
    var par = _url2.default.parse(req.url, true).query;
    var username = par.username;
    var password = par.password;
    try {
        var result = (0, _users.pushData)(username, password);
        (0, _crypto.getDeAesUtf)(token, '1601B') && result;
        res.send({
            code: 1,
            msg: '注册成功'
        }) || res.send({
            code: 0,
            msg: '注册失败'
        });
    } catch (e) {
        res.send({
            code: 0,
            msg: '服务器异常'
        });
    }
});
exports.default = router;