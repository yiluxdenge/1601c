'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../modules/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/api/getDatum', function (req, res) {
    (0, _users.getDatum)(function (result) {
        console.log(result);
        res.send({
            code: 1,
            msg: '获取成功',
            data: result || []
        });
    });
});
exports.default = router;