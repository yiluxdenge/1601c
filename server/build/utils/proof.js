'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _crypto = require('./crypto');

var e = 5;
var sTime = void 0;
var eTime = void 0;

exports.default = function (req, res, next) {
    var token = req.headers.token;
    //首次请求非登录接口

    if (!token && req.url !== '/api/checkUser') {
        res.send({
            code: 0,
            msg: "无权限访问"
        });
    } else if (!token && req.url == '/api/checkUser') {
        sTime = new Date().getTime / 1000;
        next();
    } else if (token && req.url !== '/api/checkUser') {
        eTime = new Date().getTime();
        var user = (0, _crypto.getDeAesUtf)(token, '1601B');
        console.log(!user);
        if (!user) {
            res.send({
                code: 0,
                msg: '无权限访问'
            });
        } else if (eTime - sTime > e) {
            res.send({
                code: 0,
                msg: '登录超时重新登录'
            });
        } else {
            next();
        }
    } else if (token && req.url == "/api/checkUser") {
        var _user = (0, _crypto.getDeAesUtf)(token, '1601B');
        if (!_user || eTime - sTime > e) {
            next();
        } else {
            console.log(11111);
            res.send({
                code: 1,
                msg: "登录成功--->token"
            });
        }
    }
};