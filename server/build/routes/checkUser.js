'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../modules/users');

var _crypto = require('../utils/crypto.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.post('/api/checkUser', function (req, res) {
    console.log("666666");
    console.log((0, _crypto.getAesHex)('zhangsan', '1601B'));
    (0, _users.checkUser)(req.body, function (result) {
        console.log(result);
        if (result) {
            res.send({
                code: result,
                msg: '登录成功',
                username: req.body.username,
                token: (0, _crypto.getAesHex)(req.body.username, '1601B')
            });
        } else {
            res.send({
                code: result,
                msg: '登录失败'
            });
        }
    });
});

exports.default = router;